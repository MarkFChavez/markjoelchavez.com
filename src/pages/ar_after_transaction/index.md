---
title: Using the `ar_after_transaction` gem in Rails
date: 2020-04-07
---

Maybe the easiest way is to start with an example:

```ruby
class SendsEmail
  def self.call(email)
    user = User.new(email: email)
    user.save

    EmailSenderJob.perform_async(user.id)
  end
end
```

### What's wrong?

Remember that calling `save` in an ActiveRecord model is its own
transaction. This means when `EmailSenderJob` is called and queued by
our background worker, we don't even know if the transaction was
committed already.

What's the worst thing that could happen?

The `EmailSenderJob` will error out as it wasn't able to find the
user you provided.

### Solution

The gem `ar_after_transaction` provides us with a helper method that accepts
a block -- and runs that block only when an open transaction is committed.

The above example can be converted to use `ar_after_transaction` by doing:

```ruby
class SendsEmail
  def self.call(email)
    user = User.new(email: email)
    user.save

    # Only sends the email when the user is committed to the database
    ActiveRecord::Base.after_transaction do
      EmailSenderJob.perform_async(user.id)
    end
  end
end
```

Source: [https://github.com/grosser/ar_after_transaction](https://github.com/grosser/ar_after_transaction)
