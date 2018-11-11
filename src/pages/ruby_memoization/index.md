---
title: "Ruby: Memoization Done Better"
date: 2018-11-11
---

If you have written some Ruby code for a while, this is probably how 
proper memoization looks like to you.

```ruby
def load_all_products
  @products ||= expensive_calculation
end
```

Simple! But not 100% correct. 

What if `expensive_calculation` returns `nil`? 

What if it returns `false`?

Since these are both falsey values, it'll call `expensive_calculation` 
every time the method is called.

I've learned that the better way to do this is to check if the instance
variable has a truthy value by using the `defined?` ruby keyword. Check the
example below.

```ruby
def load_all_products
  return @products if defined?(@products)
  @products = expensive_calculation
end
```

Happy reading!
