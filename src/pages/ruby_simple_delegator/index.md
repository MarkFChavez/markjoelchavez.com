---
title: Using SimpleDelegator in Ruby
date: 2019-02-24
---

Using `SimpleDelegator` is easy. Let's say for example after user
creation, we want to send the user an email. Here's one way we might 
approach this.

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def create
    @user = User.new(params)
    if @user.save
      UserNotifyingService.new(@user).deliver
      redirect_to somewhere
    else
      render :new
    end
  end
end
```

Plain and simple! No intricacies and it works. However, it feels messy and 
hard to reuse. What if someplace else, you need to do the same thing? You'll
probably end up having `UserNotifyingService` scattered around your codebase.

We can implement a Rails callback or even introduce a service object -- but
let's try to see if `SimpleDelegator` solves the problem better.

### Hello SimpleDelegator!

Let's work on the same example but have `SimpleDelegator` implemented.

```ruby
# app/models/user_notifier.rb
class UserNotifier < SimpleDelegator
  def save
    user = __getobj__
    if user.save
      UserNotifyingService.new(user).deliver
    end
  end
end
```

Then in our controller we can write the usual boilerplate for `create`.

```ruby
# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def create
    @user = build_user

    if @user.save
      # do something
    else
      render :new
    end
  end

  private

  def build_user
    UserNotifier.new(
      User.new(params)
    )
  end
end
```

The only difference here is we used `UserNotifier` to build the user that we
want to create. In here, `UserNotifier` uses `SimpleDelegator` to override 
the `save` method and makes sure that an email is sent after it gets persisted.

The thing I like about this is we can wrap them with several more delegators if
we think we need to do more. Without relying on other ruby libraries, I feel
like this is one way of writing this better.

Happy reading!
