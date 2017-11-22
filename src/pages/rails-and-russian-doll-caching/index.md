---
title: Rails & Russian Doll Caching
date: 2017-06-10
---

Let's show a list of products.

```ruby
# Showing a list of products
<% @products.each do |product| %>
  <%= product.name %>
  <%= product.description %>
  <%= product.price %>
<% end %>
```

This works fine. Until......there are thousands of records. So, let's apply caching.

## With caching

Now using Russian-doll caching.

```ruby
<% cache(["products_list", @products.pluck(:id), @products.maximum(:updated_at)]) do %>
  <% @products.each do |product| %>
    # do the same thing
  <% end %>
<% end %>
```

Here, we set a key for the cache that simply says that if this key changes, we
bust out the cache.

```ruby
@products.maximum(:updated_at)
```

Since Rails automatically updates the `updated_at` column whenever a record is
updated, we can use it as part of the cache key.

Caching, in general, is easy to implement in Rails. The challenge here is
identifying what the cache key is and when to bust the cache.

Also, please be aware that caching doesn't mean that you will gain performance.
We also need to consider how the cache is stored since that may add **network
latency** from the application to the cache store.

