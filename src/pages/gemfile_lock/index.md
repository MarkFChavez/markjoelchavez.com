---
title: Gemfile.lock
date: 2018-11-12
---

Today I want to share important things I learned about the `Gemfile.lock`.

1. If working on a Rails project, commit `Gemfile.lock` to version control.
2. If working on a Ruby gem, don't.

## But why?

When you're working on a Rails project, it is essential to keep `Gemfile.lock`
committed to the repository. This is to prevent contributors from getting a
dependency graph that's different from others. The worst thing that could happen
is other developers might write a code that's only compatible for the versions
they're using -- not across the whole team. It will introduce issues and bugs
that may be hard to debug.

The only exception to this rule is when developing for a ruby gem. Because users
of the gem may want to use a different library version compared to what's in your
gem's `Gemfile`.

## Further reading
- [Clarifying the roles of the gemspec and gemfile](https://yehudakatz.com/2010/12/16/clarifying-the-roles-of-the-gemspec-and-gemfile/)
