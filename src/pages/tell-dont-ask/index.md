---
title: Tell, Don't Ask
date: 2017-05-29
---

Rubyists often write a block of code that is similar to the one below.

```ruby
account = Account.new
account.balance = 5_000

if account.balance > 2_000
  account.buy_television!
end
```

<!--break-->

This is a code smell. Here's a better way to do it.

```ruby
account = Account.new
account.buy_television!
```

The above example is more direct. It doesn't ask. It tells object what to do.


Another bad example.

```ruby
cards = get_credit_cards_for(customer)

if cards.all?(&:active)
  PurchaseOrder.create(customer)
end
```

The better version.

```ruby
class PurchaseOrder
  def self.create(customer)
    create_transaction if customer.all_cards_active?
  end
end

PurchaseOrder.create(customer)
```

In OOP, we want to tell objects what needs to be done, not ask them first.
