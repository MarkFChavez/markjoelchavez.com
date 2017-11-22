---
title: Writing a RESTful Rails Controller
date: 2017-06-28
---

It is very important to keep your controllers clean. It must be readable, concise
and RESTful in a sense. With Rails, it is pretty easy to mess stuff up so it is
usually best to understand the benefits of knowing what RESTful really means.

#### What do I actually mean by RESTful?

It means that your controller follows the seven(7) standard actions for
accessing a resource.

1. index   [GET]
2. show    [GET]
3. new     [GET]
4. create  [POST]
5. edit    [GET]
6. update  [PATCH]
7. destroy [DELETE]

Basically it means these are the only public **actions** you can put in your
controllers.

To show you an example.

```ruby
class PeopleController < ApplicationController
  def index
    @people = Person.all
  end

  # ... some methods are omitted

  def make_admin
    @person = Person.find params[:id]
    @person.update!(admin: true)

    # render ...
  end

  def remove_admin
    @person = Person.find params[:id]
    @person.update!(admin: false)

    # render ...
  end
end
```

The above controller does not follow RESTful convention. What it does is expose
two(2) methods for making and removing admin privileges to a user which clearly
is not included on the 7 actions listed above. Plus, it just doesn't make any
sense to be placed inside the `PeopleController`.

This is usually a common thing for new Rails developers. I used to add a lot of
non-RESTful methods when I started writing with Rails and it came to a point where maintaining a controller has become wieldy and not fun. Either way, this approach is a code smell and should be placed in a
separate controller.

Let's start by transferring those methods in a separate controller which we will
call `AdminsController`.

```ruby
class AdminsController < ApplicationController
  def create
    @person = Person.find params[:id]
    @person.update!(admin: true)
  end

  def destroy
    @person = Person.find params[:id]
    @person.update!(admin: false)
  end
end
```

By adding a separate controller, we have made the intention more clean and
concise. With the new controller, we are effectively **creating** (making) and **destroying** (removing) an
admin in a RESTful sense. More importantly, it follows the RESTful convention
which is a good sign that you are doing the right thing.

Now you have shorter lines of code per controller which can be easily understood
and tested. We can now remove the methods in the `PeopleController`.

```ruby
class PeopleController < ApplicationController
  def index
    @people = Person.all
  end

  # ... other RESTful methods omitted
end
```

### Takeaways

As much as possible, we need to avoid adding non-RESTful methods to our
controllers. Keeping this in mind will make us feel better and not get us
too stressed out.

Happy reading!




