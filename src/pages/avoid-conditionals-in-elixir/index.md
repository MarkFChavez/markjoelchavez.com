---
title: Avoid Conditionals in Elixir
date: 2017-08-04
---

I used to love conditionals. I think everybody did. It gave us the ability to
decide what the system should do depending on many factors. It was a silver
bullet.

Not until I was forced to write a collection of complex conditional
logics and I didn't have my refactoring bag with me. It was hell and took me
a lot of time to understand and test the code.

Elixir has introduced a fairly new concept to my head called *Pattern Matching*.
It is somewhat similar to regular expressions but is different in many ways. We
can use the power of pattern matching to avoid conditionals and thus write a
clear and understandable code without the *if* and *else* statements.

Consider this example.

```elixir
defmodule HelloCountry do
  def for(country) do
    if country == "america" do
      "Hello"
    else if country  == "japan" do
      "Kon'nichiwa"
    else if country == "china" do
      "Nǐ hǎo"
    end
  end
end
```

The above example looks typical. Coming from the ruby language, I can safely say
that this is a usual solution but not a good one though. Personally, having a
conditional logic in a function brings a bunch of complexities.

Why?

Because it makes me think. I don't want to waste my precious time thinking (I'm sure you do too) whether the
expression returns true or false.

### The Elixir way of doing things

With Elixir, we can use pattern matching directly on functions to make sure that
we only call this function if the pattern matched. It basically looks like a
group of overloaded methods (if you came from a Java background) but their
patterns are different respectively.

You should be alarmed when you see a conditional logic in your Elixir code.

```elixir
defmodule HelloCountry do
  def for(_country = "america"), do: "Hello"
  def for(_country = "japan"), do: "Kon'nichiwa"
  def for(_country = "china"), do: "Nǐ hǎo"
end

HelloCountry.for("america") # Hello
HelloCountry.for("japan")   # Kon'nichiwa
HelloCountry.for("china")   # Nǐ hǎo
```

Pattern matching is one of the core features that made me love this language and
it only goes better from here.

Happy reading!
