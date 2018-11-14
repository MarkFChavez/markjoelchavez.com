---
title: "Ruby: Binstubs"
date: 2018-11-14
---

Binstubs are executable programs that act as a wrapper to their original
executables. Let's use `rspec` for example. `RSpec`, by default, has an
available executable that we can use.

```ruby
# Generate binstub for rspec
bundle binstubs rspec-core
```

This command will add the executable `rspec` to our project under the `bin`
directory.

```ruby
# run all tests
bin/rspec spec
```

It's best practice to always use the executable provided from the `bin`
directory. Running the binstub essentially means that we want to use the `rspec`
version that the project is using. Doing otherwise would mean it will run the
latest version of `rspec` in our local machine so we don't want this.

An alternative to running a binstub executable is by prepending `bundle exec` to
the command.

```ruby
# No binstub, no problem!
bundle exec rspec spec
```

It accomplishes the same goal as the binstub -- but you wouldn't want to type it
every time you need to run the tests. Nonetheless, you can use the method you
prefer.

## To generate binstubs contained in your project's Gemfile

```ruby
# generate executables!
bundle install --binstubs

# for a single gem
bundle binstubs rspec-core
bundle binstubs rake
bundle binstubs rails
```

