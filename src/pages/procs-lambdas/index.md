---
title: Procs vs Lambdas
date: 2018-02-24
published: false
---

Procs and Lambdas are simply, blocks in ruby. The only difference between these and a simple block (which uses yield)
is that the former can be derived as a `callable object` as well. It just means that you have more control of the block
and can call it anywhere inside the method.

In this article, I will assume that you are already comfortable understanding with how a block works both conceptually
and in real application. With that said, I think it's now time to get started with the basics of procs and lambdas.

### The Basics

Essentially, procs and lambdas are considered as callable objects which I mentioned earlier. What that means is that we can
instantiate a proc/lambda and decide to call it later.

Now, what's the benefit of being able to call or execute your proc at a later
time? My personal thought is that our program becomes more flexible and easy to
change since we have full control of the time when it executes. It is even much
more beneficial especially when we are writing tests.

```ruby
# PROC
p = Proc.new { |name| name.upcase }
p.call('mark') # MARK
p.call('ruby') # RUBY

# LAMBDA
l = lambda { |name| name.upcase }
l.call('python') # PYTHON
```

They don't have much of an implementation difference but as you will see, there are gotchas that
we have to be aware of.

### How return works inside a Proc?

Using a `return` statement inside a proc causes it to actually `return` from the scope where it came from. To illustrate 
an example:

```ruby
def a_proc
  proc = Proc.new { return 'hello' }
  proc.call

  return 'world' # unreachable code
end

a_proc # hello
```

With the above example, calling `return` from inside the proc causes an actual return from the
method itself.

### Returning in a Lambda

I must say that personally, a `return` statement in lambda works intuitively with how I understand
Ruby. The `return` statement only works locally inside the lambda itself and does not affect the
scope or the method call.

```ruby
def a_lambda
  l = lambda { return 'hello' }
  puts l.call

  return 'world'
end

a_lambda # prints 'hello', then outputs 'world'
```
