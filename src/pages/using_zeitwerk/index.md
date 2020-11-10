---
title: Using Zeitwerk as your autoloader
date: 2020-11-10
---

In the previous article, I talked about the different ways to load a ruby file
and we're not stopping there. Apparently, there's an easier way of loading files
without the nuisance of `$LOAD_PATH`, among other things.

With the recent release of Rails 6, I learned that they migrated the
autoloader from the traditional way to using a library called 
[zeitwerk](https://github.com/fxn/zeitwerk) -- it's much faster, and 
thread-safe. More importantly, let me provide you a simple comparison on how 
might a traditional `require` differ from using zeitwerk. 

Why use an external library if Ruby already has a built-in way of doing it?

Given a directory structure:

```ruby
lib/
  > anotherfile.rb
hello.rb
```

Let's load `anotherfile.rb` using the old and zeitwerk way.

```ruby
# OLD WAY

$LOAD_PATH.unshift "lib"
require "anotherfile"
```

```ruby
# ZEITWERK
require "zeitwerk"

loader = Zeitwerk::Loader.new
loader.push_dir("lib")
loader.setup
```

With zeitwerk, the directory structure plays a very important role because your
constants should be defined based on how the directories are mapped out (at
least by default, but IIRC you can override this). For example:

```ruby
app/services/
  > hello/
    > world.rb
```

Zeitwerk expects that you have a constant defined `World` under the `Hello`
module.

```ruby
require "zeitwerk"

loader = Zeitwerk::Loader.new
loader.push_dir("app/services")
loader.setup

Hello::World.new
```

Happy coding!
