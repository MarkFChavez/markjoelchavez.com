---
layout: post
title: Notes on Redux
category: javascript
---

I decided to make this article for the purposes of actually learning the
fundamentals of redux.

Technically speaking, it is a container that holds your whole application
state. So instead of adding a bunch of state logic to wherever you might think
of, redux helps you manage those things from a single container which helps you manage your app with quickly and with less problems.

<!--break-->

### Redux terms we need to know

1. **Action creators** are just functions that return an object.
2. **Reducers**, like action creators, are also functions that are meant to
update the application state.
3. **Store** is the object that stores all the states.

### How this looks in action.

As a good first example, I'll show you how to add a todo item using Redux.
Below is a basic redux setup.

```javascript
// import redux lib
const redux = require('redux')

const DEFAULT_STATE = []

// action creator
function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

// reducer
function todoReducer(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload)
    default:
      return state
  }
}

// create the store for our app.
const store = redux.createStore(todoReducer)
```

Now with the basic setup done, we can do one of the ff:

1. Get the current state
2. Dispatch an action

### Getting the current state

Getting the current state is as easy as calling `getState` function on our
`store` object.

```javascript
store.getState() // returns an empty array []
```

### Dispatching an action

If you remembered, we added a function called `addTodo` on top which returns an object. To dispatch an action, we simply call `dispatch` on our `store.

```javascript
store.dispatch(addTodo('Clean my room'))
```

What that does is check **all** reducers and see if any of those has matched
the `type` returned by our action creator `addTodo` which in this case, `ADD_TODO`.

Since it matched our one and only reducer, the body gets called and a new
state is returned. Let's check our state again.

```javascript
store.getState() // ['Clean my room']
```

### Conclusion

Overall, I believe redux has a whole lot to offer. It greatly simplifies the
management of our application state. Regardless of how big your codebase is, using redux will help you make it manageable and maintainable.

For more awesome goodies, check out [http://redux.js.org](http://redux.js.org).

Happy reading!