---
layout: post
title: Arrow Function and When To Use It
category: javascript
---

Since the release of ES6, there has been a number of new and exciting features. One of those is the
**arrow function**. In the surface, arrow function is not a replacement to function declarations but
it provides us with an additional option plus it shines on specific use-cases too.

<!--break-->

Below is an example of a function declaration that adds two numbers given the
arguments.

```javascript
// A function declaration
function addTwoNumbers(x, y) {
  return x + y;
}
```

Here is a new version using the new arrow function.

```javascript
// Using arrow function
var addTwoNumbers = (x, y) => x + y;
```

### When to use an Arrow function

Technically, we can use the arrow function anywhere we can think of using the function declaration as
well. But this doesn't mean we have to stick with the arrow function always. Of course, just like
every language features, not every possible options yield the same results. So, when should we use an arrow function?

Consider this example.

```javascript
API.prototype.get = function(resource) {
  var context = this;

  return new Promise(function (resolve, reject) {
    resolve(context.someValue);
  })
}
```

In the above example, we are required to create a new variable that points to the value `this` so that we can access it
inside the new promise object which we all know is an entirely separate context.

Using ES6 arrow function, the above example will now look like this:

```javascript
API.prototype.get = function(resource) {
  return new Promise((resolve, reject) => {
    resolve(this.someValue); // No need to instantiate a context outside.
  })
}
```

### Conclusion

In a nutshell:

1. Normal function declarations do not change contexts.
2. Arrow functions does.

So my personal take is use arrow functions wherever we need access to context data. A common example would be
on `promise` objects.

Happy reading!
