---
title: Making Reusable Components with React
date: 2017-11-24
---

Building a component-based application is fairly reasonable. It can't be that hard and at the
same time, it can't be that trivial. Truthfully it depends on how you would write it. Like with every other tech, it usually takes a week to learn the basics while a significant amount of time to actually learn the idea and write pleasant-looking code.

> Creating reusable components requires us to think about **data** and **user interface**.

It's always best to make a component as reusable as possible. Failure in doing so leads to maintainability and
readability problems. It even comes to a point that adding a simple feature may take you days if not weeks because you are
confused with the code that you wrote yourself.

As much as possible... and based from my experiences, your component should somehow follow this guidelines:

### 1. Should not depend on any internal data or state.

```javascript
// BAD
const Header = function () {
  return <header> Title </header>
}

// GOOD
const Header = function ({ title }) {
  return <header> {title} </header>
}
```

### 2. Pass functions as props

Remember that in JavaScript, **functions** are first-class citizens so you can treat them just like any other
variables.

```javascript
// BAD
const Button = function () {
  return <button onClick="() => alert('you clicked me')"> Click me </button>
}

// GOOD
const Button = function ({ onClick, text }) {
  return <button onClick={onClick}> {text} </button>
}
```

### 3. Get data from container components instead.

Containers play a major role in making a maintainable React application. These are really just components that contains other components. Such examples can be:

- An `ArticleList` that contains a list of articles.
- A `Shopping Cart` that contains a list of products.
- A `TabList` that has a list of tabs.

## Final words

In reality, it's up to you to define whether a component is a container or not. They are often used to communicate
with a global state library such as [redux](https://redux.js.org) to make data fetching easier and in one place.

When you think about this in practice, everything will start to make sense. So always be exploring and building
new things.

Happy reading!