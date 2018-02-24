---
title: Procs vs Lambdas
date: 2018-02-24
---

Procs and Lambdas are simply, blocks in ruby. The only difference between these and a simple block (which uses yield)
is that the former can be derived as a `callable object`. It just means that you have more control of the block
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

# do something

p.call('mark') # MARK

# do another operation again...

p.call('ruby') # RUBY

# LAMBDA
l = lambda { |name| name.upcase }
l.call('python') # PYTHON
```

They don't have much of an implementation difference but as you will see, there are gotchas that
we have to be aware of.

### How return works?

Using a `return` statement inside a proc causes it to actually `return` from the scope where it came from so
building from the ruby knowledge that we have, this is something we need to be aware of when using procs.

```ruby
def a_proc
  proc = Proc.new { return 'hello' }
  proc.call

  return 'world' # unreachable code
end

a_proc # hello
```

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

### Number of Arity

In procs, number of arities are ignored. If your proc only accepts two arguments, passing more than that is
OK and does not result in an error. Proc is a litle bit forgiving than its lambda counterpart.

Also, if you didn't pass enough arguments to a Proc, it resolves those missing arguments as nil.

```ruby
proc = Proc.new do |a, b|
  [a, b]
end

proc.call(5, 5, 100) # [5, 5]
proc.call(5) # [5, nil]
```

Using lambda, on the otherhand, works just like a normal ruby method. If you didn't pass enough arguments, then there
will be an `ArgumentError`. Same result applies if you didn't pass enough arguments.

```ruby
l = lambda do |a, b|
  a + b
end

l.call(5, 5) # 10
l.call(5, 5, 5) # error
l.call(5) # error
```

### So, which should I use?

Having understood the usage and explanation for both procs and lambdas, I personally think that lambdas are more intuitive
and won't cause us problems in the long run while procs are something you should only use if you really understand the
gotchas and are intentionally making use of those.

Happy reading!
