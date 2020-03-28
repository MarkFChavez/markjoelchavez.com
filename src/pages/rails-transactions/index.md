---
title: Safer Queries with Rails Transactions
date: 2020-03-28
---

Consider the following example and feel free to identify what the
problem is.

```ruby
bank = Bank.new(balance: 0)

# deposit
bank.update(balance: bank.balance + 5_000)

# withdraw
bank.update(balance: bank.balance - 3_000)
```

This block of code sure has a major issue that's not as obvious -- but let's
see why.

### What's the problem?

What'll happen if one of the actions fail? Let's ask ourselves these: 

*What happens if the bank weren't able to deposit successfully?*

*What happens if the bank withdrew an amount that it didn't have?*

Most likely we won't know until we wake up at 2am in the morning because of an
urgent customer complaint. Now we have to wake up early and fix this issue. That's 
not healthy!

### Rails Transactions

Good thing we probably could go back to bed early. In database terms, there's 
a thing we call a **transaction**. What this does is treat multiple database
actions/queries like an **[atomic unit](https://en.wikipedia.org/wiki/Atomicity_(database_systems))** so if one action fails, then all the other actions fail as well.

In Rails, a transaction accepts a block of code that it will treat as atomic.
When a code inside the transaction block **raises an exception** (keep this in
mind), then the whole transaction block will rollback.

Let's fix the issue then.

```ruby
bank = Bank.new(balance: 0)

Bank.transaction do
  bank.update!(balance: bank.balance + 5_000) # deposit
  bank.update!(balance: bank.balance - 3_000) # withdraw
end
```

Now whenever the deposit or withdraw fails, then neither of those actions
will be written to the database. Banks are happy!

We can call transactions in multiple ways. In the above example, aside from
using `Bank.transaction`, we can also:

```ruby
# Call it from the instance-level
bank.transaction do
  # ...
end
```

or

```ruby
# Calling directly from ActiveRecord
ActiveRecord::Base.transaction do
  # ...
end
```

Use whichever style you prefer. They all do the same but I prefer using
`ActiveRecord::Base.transaction` because it's easy to understand especially 
when your transaction block has multiple models involved.

### Keep these in mind

Using transactions is easy. Knowing where/when to use it is not. These are what
I think we should remember whenever we use transactions.

1. Transactions will rollback only if you're using methods that raise
exceptions. This means using `save!`, `update!`, `destroy!`, and other 
conventional methods with a bang (`!`).

2. Using methods without a bang (`!`) is like watering an artificial 
plant -- unless you raise `ActiveRecord::Rollback` yourselves.

3. It's useless to use a transaction that doesn't have multiple database 
calls.

4. For scenarios where multiple databases are involved, nesting transactions
is also possible.

```ruby
Bank.transaction do
  Person.transaction do
    # ...

    # ...

    # ...
  end
end
```

There are a lot to know about transactions that's for sure. It's something
I've got bitten off multiple times too -- and this made me think very
differently every time I write code.

