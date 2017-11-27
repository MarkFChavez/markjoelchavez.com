---
title: React Lifecycles. When Do I Use Which?
date: 2017-11-27
---

React comes together with a number of lifecycle methods. These methods are basically functions that gets called on a specific phase of a
component's life.

Lifecycle methods can be categorized into three(3) parts:

1. When a component is about to mount.
2. When a state/props has changed.
3. When a component unmounts.

Mounting Phase (in order of execution)
--------------

#### ~ constructor

Use this function for setting your component's initial state. Also note that this function is only called **once** during its existence.

```javascript
class Game extends React.Component {
  constructor (props) {
    super(props)

    // set initial state
    this.state = { numberOfPlayers: 10 }
  }
}
```

#### ~ componentWillMount

This is honestly a function I don't know where to use. I try avoiding this as much as possible. Instead, I'd rather use `componentDidMount`. As quoted by Dan Abramov (creator of Redux).

> In future versions of React we expect that **componentWillMount** will fire more than once in some cases, so you should use **componentDidMount** for network requests.

Check more about the discussion [here](https://stackoverflow.com/questions/41612200/in-react-js-should-i-make-my-initial-network-request-in-componentwillmount-or-co/41612993#41612993).

#### ~ render

This is the actual function where you return an actual component. It is bad practice to set an initial state inside this function. Always remember that the only responsibility of this function is to **render**. Nothing more!

#### ~ componentDidMount

This is a function you will often use especially when making network requests. It is called after the component
is rendered. So if you are consuming a third-party API, this is the right place to do so. The common practice here is to store the response on the component's local state like so:

```javascript
class DogList extends React.Component {
  componentDidMount () {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // set the state
        this.setState({ result: api_result })
      })
  }

  // ...
}
```

Updating Phase (again, in order of execution)
--------------

#### ~ componentWillReceiveProps(nextProps)

Whenever a state or prop is updated, this function will be called with the new props as its parameter. This is the best time to check the differences between the old and
new props, and depending on those differences, make some state changes via `setState()`.

#### ~ shouldComponentUpdate(nextProps, nextState)

Often used for performance optimizations. My thoughts here is that only use this when you are already experiencing performance issues in your own app. Avoid premature
optimization at all cost.

#### ~ componentWillUpdate(nextProps, nextState)

Personally, I haven't used this function yet but this is where you can do a final preparation before the final **render**.

#### ~ render

The component renders.

#### ~ componentDidUpdate(prevProps, prevState)

Maybe call further asynchronous requests here.

Unmounting Phase
--------------

This phase is only consist of one function named **componentWillUnmount**. Common use-cases for this is to do some cleanup like de-attaching listeners, closing connections and other
stuffs that might leak and cause performance issues for the browser.


Last, but not the least.
--------------------------------------------

[React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html#introducing-error-boundaries) added a new lifecycle method **componentDidCatch(error, info)** that gets called whenever an error occurred during the different lifecycle phases. One good use-case would be
if a problem shows up while fetching a third-party data, set a temporary error message to show to the users.

# Final Thoughts

As you go along the roads of React, you will further understand the meaning and purpose of each of these lifecycle methods. I won't guarantee that you will be able to use them all but
they are equally important to fully understand the capabilities of this library.

Happy reading!