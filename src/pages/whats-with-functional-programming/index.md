---
title: Functional Programming & Elixir
date: 2017-06-14
---

Looks like functional programming is gaining a lot of traction for quite some time now. I just
started reading about Elixir and it seems like a promising language that also
focuses on developer happiness just like Ruby but with the notion that it is
fast, highly-scalable and battle-tested (uses the Erlang VM which powers the
majority of telecom networks).

We're getting more CPU cores than ever and using a functional language like
Elixir gives developers the capability to write concurrent applications by thinking
about processes.

### Why Elixir?

The creator of Elixir, [Jose Valim](https://twitter.com/josevalim?lang=en),
was actually a part of the Rails core team and has contributed a lot to the Rails ecosystem.

While it is still a young language, there are already a lot of resources and
references available on the web which makes it easy for new developers to dive in
and get started.

There's even a [conference](https://elixirconf.com/) about it. It is unusual for
an early language to organize one.

The [documentation](https://elixir-lang.org/docs.html) is very well-written and easy to grasp.

### Now what?

Personally, it didn't take me long enough to decide whether to learn Elixir or
not. At first, I was looking at some Go code and it just didn't resonated with me.
Compared to Elixir which has got me **hooked** immediately.

I guess me being a Ruby developer has influenced my decision to learn this
language. The syntax and tooling of Elixir didn't seem new to me. In fact,
it's like coding in Ruby only with some minor differences.

1. Elixir's `mix` is similar to Ruby's `rake`.
2. Both languages has metaprogramming capabilities.
3. Ruby has symbols while Elixir has atoms.
4. And I'm sure there are more!

An example code.

```ruby
# Ruby
def hello_world
  puts "hello world"
end

# Elixir
def hello_world do
  IO.inspect "hello world"
end
```

### Takeaways

One thing. If you are used to object-oriented programming, it may take you a little
while to get familiar with the functional style of writing. But don't let that
hinder you from learning an interesting language!

Forget all the concepts that you've learned about OOP because this is really
different. Empty your cup!

If you are also a Ruby developer like me, Immutability may sound very strange to
you. Don't be afraid. Just dive in and sip some Elixir!

### Conclusion

Like all other languages, Elixir is not a silver bullet. It is not perfect.  It is
not always the right decision. It is our responsibility as developers to pick the
right language and tools to solve our problems.



