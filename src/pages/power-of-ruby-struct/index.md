---
title: The Power of Ruby's Struct
date: 2017-05-25
---

I like Structs. They are simple and useful. They provide the same functionalities
like classes do. I normally use a Struct if I only need to have accessor methods because
it fits the use-case very well.

~~~ ruby
# Creating a Struct
Person = Struct.new(:first_name, :last_name)

person = Person.new("Bart", "Simpson")
person.first_name # Bart
person.last_name  # Simpson
~~~

It's simple, concise and elegant. Now, here is a class version of that example.

~~~ ruby
class Person
  attr_accessor :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name
  end
end

person = Person.new("Kent", "Beck")
person.first_name # Kent
person.last_name  # Beck
~~~

Using classes, it took us several lines to actually match our Struct example. While the
difference is so trivial, using Struct is still a good margin of improvement and saved us
ample time to write.

With Struct, we can also add a method by supplying a block.

~~~ ruby
Point = Struct.new(:x, :y) do
  def coordinates
    [x, y]
  end
end

point = Point.new(1, 2)
point.coordinates # [1, 2]
~~~

That's pretty cool, you say? But is there a really useful way to use Structs? I am pretty
sure that there a lot of use-cases that structs are a better option than classes but let me
show you one use-case where Struct really shines.

Let us assume that we are trying to call an external API that returns a list of restaurants nearby
given our x and y coordinates.

~~~ ruby
# Assume that this is an external API call to some restaurant service.
restaurants = Net::HTTP.get("api/v1/restaurants/nearby?x=17&y=18").body
first_result = restaurants.first_result

first_result # [ { id: 1, name: "McDonalds" }, { id: 2, name: "Pizza Hut" } ]
~~~

As you can imagine, the API returns an array of hash and this is how you are supposed to
access the results.

~~~ ruby
restaurants.each do |restaurant|
  restaurant[:id]   # 1
  restaurant[:name] # McDonalds
end
~~~

At first glance, it seems that the code is written and can be understood easily. But imagine that one
restaurant object contains ten(10) additional attributes. That's where things start to become
complicated. In theory, there is really nothing wrong with this except that by using a Struct, this code
becomes more idiomatic. Let's create a Restaurant struct with an id and a name.

~~~ ruby
Restaurant = Struct.new(:id, :name)
~~~

Now, let's build a collection of Struct from the external API.

~~~ ruby
restaurants = Net::HTTP.get("api/v1/restaurants/nearby?x=17&y=18").body
restaurants = restaurants.map do |restaurant|
  Restaurant.new(restaurant[:id], restaurant[:name])
end

restaurants # now shows a collection of struct objects representing a restaurant
~~~

So if we were to list all restaurants, we can use it like this.

~~~ ruby
restaurants.each do |restaurant|
  restaurant.id   # 1
  restaurant.name # McDonalds
end
~~~

We could have instantiated the restaurant struct inside the #each method but I prefer not to
because with that approach, it is fairly easy to introduce a duplication somewhere else.

Happy reading!
