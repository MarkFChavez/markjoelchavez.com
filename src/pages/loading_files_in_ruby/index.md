---
title: Loading Files in Ruby
date: 2020-11-09
---

With Ruby, there are always multiple ways to accomplish a thing -- loading files
being one of them. In this article, I'll be talking about the different ways
of requiring/loading a ruby file, namely:

1. `require`
2. `require_relative`
3. `load`
4. `autoload`

### Using `require`

The keyword `require` is what I often see when browsing ruby source code but
it's the concept that I least understood quite ironically. And just recently, I
committed my time (finally!) to actually learning what it does and how it works.

First, it helps to understand what `$LOAD_PATH` means. It is basically an environment 
variable that contains an array of directories to look at. So if the file you're
requiring is not present in `$LOAD_PATH`, then it shouldn't be able to load it.

Given a directory structure:

```ruby
lib/
  other_file.rb
root.rb
```

And inside `root.rb`:

```ruby
require "other_file" # won't find the file
```

To make this work, let's add `lib` to the `$LOAD_PATH`:

```ruby
$LOAD_PATH << "lib"
require "other_file" # works
```

Instead of using `<<` and adding the directory as the last entry to the path
array, you can do the opposite `unshift` which will add it to the first entry,
hence faster lookup.

### Using `require_relative`

This one's easier and coming from the method name, it's literally requiring
the file in a relative manner. We can accomplish the above example using
`require_relative` by doing:

```ruby
require_relative "lib/other_file"
```

We don't need to change or modify `$LOAD_PATH` but keep in mind that you may
have to update this if you move the files.

### Using `load`

Another thing to keep in mind when using both `require` and `require_relative`
is that no matter how many times you require the same file, the code will run
only once. It's quite the opposite of what `load` does.

```ruby
$LOAD_PATH << "lib"

require "other_file" # runs the code
require "other_file" # does not run the code
require "other_file" # does not run the code

load "other_file" # runs the code
load "other_file" # re-runs the code
load "other_file" # re-runs the code
```

### Using `autoload`

It lazy loads the file.

```ruby
$LOAD_PATH << "lib"
autoload :SomeModuleInTheFile, "other_file" # does not load the file

SomeModuleInTheFile.call() # finally loads the file
```


Which one should you use should depend on the use-case but I find that for
bigger projects like Rails, it helps to avoid loading a huge number of files at
once so I've seen parts of it with heavy use of autoloading.

