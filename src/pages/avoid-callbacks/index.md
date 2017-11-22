---
title: Why You Should Avoid Rails Callbacks?
date: 2017-06-21
---

**tl;dr - Just avoid them at all costs**

Callbacks are evil. Well, maybe at this point in time, you haven't realized that yet but I want you to read on and
continue.

Consider this scenario.

```ruby
class Message < ActiveRecord::Base
  after_commit :send_email,     on: :create
  after_create :add_to_history, on: :create
end
```

This is a simple representation of a model called `Message` that has two(2)
callbacks namely;

1. `send_email` which will obviously send an email.
2. `add_to_history` which will add a history item for tracking the user's
   activity.

At first look, this seems to be a well-written code. Technically, it is but in
reality it's not and here's why.

1. What happens if you `create` a Message inside the Rails console?
2. How will you make a proper unit test for this model?
3. I'm sure you don't want your users to receive a lot of emails when a unit tests
are ran. That will cost a lot of money and business confusion.

Problem is the `Message` model is tightly coupled to sending an email and adding a history item and you
don't want that.

Well, adding callbacks was easy and it had saved you an ample amount of time.

**But..**

You should also consider the different problems this may cause. A model that is
difficult to test likely needs to be refactored. These callbacks could soon be
a problem when your codebase has gotten bigger. And you don't want to come to a
point where removing these callbacks could be difficult and may take a wasteful
amount of time to do.

If it comes to that point, Rails has
[skip_callback](https://apidock.com/rails/ActiveSupport/Callbacks/ClassMethods/skip_callback) and [set_callback](http://api.rubyonrails.org/classes/ActiveSupport/Callbacks/ClassMethods.html#method-i-set_callback) methods available for you to
use.

I do not recommend this solution because it adds a bit of complexity to your
app. I would still suggest avoiding those methods but if there are serious time
constraints, might as well do it.

### Conclusion

I hope you have understand the several reasons why Rails callbacks are something you
should avoid doing.

A good solution for this problem would be to add a [Service Object](#) which will be
a part of a future post.

Happy reading!


