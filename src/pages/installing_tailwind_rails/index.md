---
title: Installing TailwindCSS in a Rails app
date: 2018-11-17
---

Supports [Rails v4.2](https://github.com/rails/webpacker#prerequisites) and up.

This article will explain the installation process of tailwindcss in the 
context of building a new Rails app. If you have an existing Rails app, all you
have to do is install webpacker then you can follow through the steps outlined 
below.

## 1. Initialize the app

```ruby
# installs the webpacker gem
rails new sample_app --webpack
```

## 2. Install tailwindcss

```ruby
# yarn
yarn add tailwindcss

# npm
npm install tailwindcss --save-dev
```

## 3. Add tailwindcss config

```ruby
# generates a tailwind.js in root directory
./node_modules/.bin/tailwind init

# move to css directory of webpacker
mv tailwind.js app/javascript/css/tailwind.js
```

## 4. Add default tailwindcss file

You can get the default stylesheet [here](https://tailwindcss.com/docs/installation#3-use-tailwind-in-your-css) 
and add to `app/javascript/css/application.css`.

## 5. Add tailwindcss to .postcssrc.yml

```ruby
# .postcssrc.yml
tailwindcss: "path/to/tailwind.js"
```

## 6. Load tailwindcss from the application

```ruby
# application.js
import "path/to/application.css";
```


That's all you need to do. Try adding tailwindcss utility classes and they
should work as expected. This library has always been my goto library when
developing a product. It has a pretty low learning curve and you don't have
to memorize component classes because it's based on utilities. 

Check them out. [TailwindCSS](https://tailwindcss.com).
