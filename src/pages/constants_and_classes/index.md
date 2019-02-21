---
title: "Ruby: Constants and Classes"
date: 2019-02-22
---

Given the class `Person` as shown below.

```ruby
class Person
  NAME = "Mark"

  def talk(msg)
    puts msg
  end
end
```

The goal of this article is to let you know an alternate approach about
constants and classes.

### Defining a constant

Using metaprogramming, we can define a constant by using the `const_set`
method. Looking at our example, let's use `const_set` to define our constant.

```ruby
# Will work regardless if NAME is a string or a symbol.
Object.const_set(:NAME, "Mark")
Object.const_set("NAME", "Mark")
```

To read and access a constant's value, we use `const_get`.

```ruby
# Will both return "Mark"
Object.const_get(:NAME)
Object.const_get("NAME")
```

### Defining a method dynamically

We can define a method by using `define_method` with a method name and a 
block.

```ruby
define_method "talk" do |msg|
  puts msg
end
# or separate the block by:
blk = -> (msg) { puts msg }
define_method "talk", &blk
```

### Let's build the Person class!

Looking from our original example at the beginning of this article, we know 
that the `Person` class has a constant called `NAME` and a single instance 
method `talk` so let's define the behavior that will define those requirements.

```ruby
blk = -> (msg) { puts msg }
klass = -> (klass) do
  klass.const_set(:NAME, "Mark")
  define_method("talk", &blk)
end

# class_eval executes the passed block in the context 
# of the class that's why the variable `klass` accepts a
# class object which in this example is `Person`.
Person = Class.new
Person.class_eval(&klass)

Person.new.talk("Hello world!") # Returns "Hello world!"
```
