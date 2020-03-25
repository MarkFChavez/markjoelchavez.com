---
title: "Dividing Actions with LightService"
date: 2020-03-25
---

To get a clear understanding of this, let's add an example that most of us can
relate to -- **onboarding an employee**.

### Example

What happens during a typical employee onboarding? These are what I have in mind:

1. Employee is given a new hire orientation.
2. Employee is assigned a cubicle to work on.
3. Employee is given his/her company ID.
4. Employee is given a company-issued laptop, and a monitor.
5. Employee is given account access to computer.
6. Employee receives a welcome email from the company.

Employee onboarding is usually more complicated than that but this should be enough to
make the point. 

Let's convert these steps to a Ruby class, shall we?

```ruby
class OnboardingController < ApplicationController
  def create
    @employee = Employee.new(employee_params)

    if @employee.save
      facilitator = find_available_facilitator!
      orient_user!(@employee, facilitator)

      available_cubicle = Cubicle.find_by(
        status: "free"
      )
      available_cubicle.update!(
        employee: @employee,
        status: "occupied",
      )

      @employee.identification_number = "company-id-number"
      @employee.save!

      %w(laptop monitor mouse).each do |device|
        @employee.devices.create!(
          name: device,
          issued_at: Time.now,
        )
      end

      @employee.account.create!(
        username: # username
        password: # password
      )

      EmployeeWelcomeEmail.deliver!(@employee)
    else
      render :new
    end
  end
end
```

That's a LOT of logic. It's a mess. That's a huge waste in LOC.

Ultimately, this is not a controller that would be easy to understand. This will 
be hard to test too -- and this is one of the many examples where 
`LightService` just shines!

### Using LightService

One way to solve this using LightService is to divide one whole logic to separate
small ones.

There are two important terms to understand LightService easier:

1. **Organizer** - this is the main service class that's responsible for executing
   the whole business logic. It contains multiple actions. A class is considered 
   an organizer if it extends `LightService::Organizer`.

2. **Action** - this is a small but important chunk of the job. It should be 
  responsible for one thing only. You can say that a class is an action if it
  extends `LightService::Action`.

First, the organizer essentially lists all the actions in order of execution.

```ruby
class OnboardEmployee
  extend LightService::Organizer

  def self.call(employee_params)
    # `employee_params` is accessible from all actions
    with(employee_params: employee_params).reduce(actions)
  end

  def self.actions
    [
      AddEmployee,
      GiveOrientation,     
      AssignCubicle,
      IssueID,
      IssueDevices,
      GiveAccountAccess,
      SendWelcomeEmail,
    ]
  end
end
```

An example of a `LightService::Action` would look like this:

```ruby
class AddEmployee
  extend LightService::Action

  # we make `employee_params` available for this action
  expects :employee_params

  # we return back an `employee` which will be available for the next actions
  promises :employee

  executed do |context|
    context.employee = Employee.create!(context.employee_params)
  end
end
```

When we move to the next actions, we'll be able to refer directly to
the `employee`.

```ruby
class IssueDevices
  extend LightService::Action

  expects :employee
  
  executed do |context|
    %w(laptop monitor mouse).each do |device|
      context.employee.devices.create!(
        name: device,
        issued_at: Time.now,
      )
    end
  end
end
```

### Moving back to the controller

Not surprisingly, the controller now looks like this:

```ruby
class OnboardingController < ApplicationController
  def create
    result = OnboardEmployee.(employee_params)

    if result.success?
      redirect_to # ...
    else
      # LightService sets `message` to whatever the error it catches
      flash.now[:error] = result.message
      render :new
    end
  end
end
```

For larger codebases, I find that organizing your organizers and actions with 
module namespaces is more helpful and scales better as it grows.

### Final Thoughts

LightService has helped me understand a complex workflow and chunk it to
smaller, easier-to-understand classes which helps me a lot in terms of
organizing my thought process. For better results, you can even pair it up
with `trailblazer-rails`.

We cannot cover all features that LightService has but there are plenty of 
concepts to read. I suggest checking their documentation.

#### Links

- [light-service](https://github.com/adomokos/light-service)
- [trailblazer-rails](http://trailblazer.to/)

