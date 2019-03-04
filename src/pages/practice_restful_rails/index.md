---
title: Practice RESTful Rails
date: 2019-03-04
---

It's best practice to be as RESTful as possible with our controller
actions. It makes it easy for developers to understand, extend, and improve
the design of the codebase.

Let me show you what I mean.

```ruby
# config/routes.rb

resources :posts, only: [:index, :show] do
  member do
    put :publish
    put :unpublish
  end
end
```

```ruby
# app/controller/posts_controller.rb
class PostsController < ApplicationController
  def index
  end

  def show
  end

  def publish
    @post = Post.find(params[:id])
    @post.update!(published: true)
    redirect_to @post
  end

  def unpublish
    @post = Post.find(params[:id])
    @post.update!(published: false)
    redirect_to @post
  end
end
```

Here we have a controller that lets us manage a model called `Post`. This allows
us to manage a post. When I first learned Ruby on Rails, I abused this practice 
because I felt like that's the only rational approach to begin with and it's
working fine anyway.

And as I wrote a bunch more of this, I realized how bad a smell this is. These 
non-RESTful actions didn't look like it should exist. Our routes file was a 
mess. Controllers grew larger and larger until it was not practical to change
and maintain.

### Using RESTful routes

I'll show you a better approach that makes this simple and pleasing to our 
eyes. Let's look at how it might look using the RESTful way.

First, our `config/routes.rb` tells us that we're using a new controller that
will handle publishing and unpublishing of a `Post`.

```ruby
resources :posts, only: [:index, :show] do
  resource :publish_post, only: [:create, :destroy]
end
```

We add a new controller in `app/controllers/publish_posts_controller.rb`.

```ruby
class PublishPostsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @post.update!(published: true)
    redirect_to @post
  end

  def destroy
    @post = Post.find(params[:post_id])
    @post.update!(published: false)
    redirect_to @post
  end
end
```

I find that it's more easier to understand what a controller does when it's 
RESTful plus we were able to clean up the previous controller. This is a skill 
that gets better with practice. Imagine a large Rails codebase that only has
RESTful actions. Now that's something I want to strive for!

Happy reading!

