---
title: "Best Practices: Installing Ruby Gems"
date: 2018-11-13
---

## 1. Update one gem at a time

```ruby
# Bad
bundle update

# Good
bundle update devise
```

Doing a `bundle update` is not recommended because it will attempt to update
all gems listed in your `Gemfile`. Make sure you're updating dependencies one at
a time to avoid issues.

## 2. Use a strict gem version when necessary

```ruby
# Strict
gem 'devise', '3.5.0'
```

One good way of installing a ruby gem is by providing a strict version. It
prevents accidental gem updates. This works better if you're working on a Rails
app but avoid this when developing a Ruby gem. 

## 3. Always provide an upper-bound version

```ruby
# Bad
gem 'devise', '> 2.5.0'

# Good
gem 'devise', '> 2.5.0', '<= 3.2.0'
```

A gem entry without an upper-bound may also lead to incompatibility issues. The
first example above means that the app will always install the latest-released 
version of the gem. If the latest version of that gem is not compatible with
your app, then an error is sure to happen.

Providing an upper-bound version is saying that the known versions of this gem
that works in this app is from 2.5.1 to 3.2.0 (based from the above example).
