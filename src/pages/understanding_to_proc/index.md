---
title: Understanding to_proc
date: 2020-11-05
---

Today, I learned about `to_proc`. If you've been a Ruby developer for quite some time,
this block of code might look familiar to you.

```ruby
['ruby', 'python', 'haskell', 'php'].map(&:upcase)
```

The above code is shorthand for the ff.

```ruby
['ruby', 'python', 'haskell', 'php'].map { |lang| lang.upcase }
```

There seems to be some kind of wizardry happening here. If you start to realize
or understand that most of the things in Ruby are objects, then I think this'll
be more easier to absorb.

### How does it work then?

The secret sauce here is that the class `Symbol` has a method named
`to_proc`. What it does is **convert a symbol to a proc**. This is how
the code could be implemented.

```ruby
class Symbol
  def to_proc
    -> (obj, args=nil) { obj.send(self, *args) }
  end
end
```

As soon as you understand this, you can implement `to_proc` anywhere you'd like
-- and it's pretty powerful. An example:

```ruby
class Power
  def to_proc
    -> (obj) { obj ** 2 }
  end
end

[1, 2, 3].map(&Power.new) # [1, 4, 9]
```

or even aesthetically better, implement it as a class method.

```ruby
class Power
  def self.to_proc
    -> (obj) { obj ** 2 }
  end
end

[1, 2, 3].map(&Power) # [1, 4, 9]
```

Happy coding!

