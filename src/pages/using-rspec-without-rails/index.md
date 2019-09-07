---
title: "Using RSpec without Rails"
date: 2019-09-07
---

Sometimes I find myself wanting to test a ruby code outside the context of 
Rails. If what I want to test is trivial and so simple, then creating a 
single `demo.rb` looks sufficient. In most cases, I add unit tests so I can
debug easily and effectively. Of course, that means we're looking for something
a little complex than our `demo.rb`.

In this article, I aim to share with you how I do this using my go-to 
testing framework, **RSpec**.

## 1. First, let's setup the project and install RSpec.

Let's create our project directory.

```ruby
$ mkdir demo_project
```

Install `rspec` inside demo_project.

```ruby
$ cd demo_project
$ touch Gemfile
```

Inside the Gemfile, add the ff. lines:

```ruby
source 'https://rubygems.org'
gem 'rspec'
```

Then run `bundle install`.

## 2. Now that Rspec is installed, let's set that up.

```ruby
$ bundle exec rspec --init
```

Using `bundle exec` is important here to make sure we're running the rspec
version from our Gemfile. This command will generate a `spec_helper.rb` file
inside the `spec` directory.

## 3. Let's make a test file and make sure it works.

```ruby
$ touch spec/demo_spec.rb
```

Write the spec you want to test.

```ruby
require 'spec_helper'

RSpec.describe "Demo spec" do
  it "works" do
    expect(1 + 1).to eq 2
  end
end
```

Run `bundle exec rspec spec` and you should see the test pass.

