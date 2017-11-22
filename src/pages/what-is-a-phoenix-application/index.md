---
title: How Phoenix Define an Application?
date: 2017-07-26
---

Hey there.

How are you? It's been a while since I last published an article! Well, that's
because I am currently involved in a JavaScript project and it's been a fun
experience so far! And I'm quite getting the hang of it. Maybe I will find some time
in the future to share my experiences and struggles.

Now, let's get down to Phoenix!

Earlier today as I was searching for some Elixir goodies, I was brought upon a
youtube link (watch [here](https://www.youtube.com/watch?v=lDKCSheBc-8)) of **Lance Halvorsen**
talking about the Phoenix framework. If you are not familiar who Lance is, he wrote
[this](https://pragprog.com/book/lhelph/functional-web-development-with-elixir-otp-and-phoenix)
book and I encourage you to take a look.

The talk amazed me. Seriously. It did. It gave me a new perspective when writing
with Elixir or Phoenix. Simply, what Lance was trying to say is that an
`Application` is not really what it is as we know it. An application, as I
understood it, is like a monolith that consists of business logic, database
connections, templates and many more. As a Rails developer, that is basically
a fact but with Phoenix, it is different in a high scale.

### So How Does Phoenix Define An Application?

Working with Phoenix gives you a different perspective. It is in itself, an
application, but it can contain one or more applications. You heard that right.
I'm not drank or anything. In fact, I encourage you to watch the video because
I'm pretty sure I missed some points or two. But in any case, let me explain to
you a deeper meaning of this.

A typical Phoenix application contains **one or more Elixir applications added as
a dependency**. That's a good design because it lets you write good code that is
decoupled. Meaning, the business logic and the framework itself are a separate
entity.

Having said those, then the good way to build a Phoenix application is to build
the Elixir applications first then integrate them via Phoenix interface. In this
way, your app becomes easy to reuse and understand.

Happy reading!
