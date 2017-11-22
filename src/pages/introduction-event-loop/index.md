---
title: 'Introduction: JavaScript Event Loop'
date: 2017-10-25
---

Today I want to talk a bit about the **Event Loop**. If you want to get deeper
with JavaScript, it is very essential to understand the fundamentals. For this
article, I want you to at least keep these terms in mind (and in order).

1. Call Stack
2. Event Table
3. Event Queue
4. Event Loop

Let's get started by talking about how JavaScript executes a program.

### How are functions called in JavaScript?

JavaScript executes a program differently. Unlike with other programming languages the actual skeleton of execution is not explicitly obvious.

JavaScript behaves differently when it comes to handling asynchronous
messages.

Let's use **Ruby** to demonstrate this case.

```ruby
# let's assume that this is an asynchronous call to some API
sleep 5000

puts "We're done here"
```

If you are someone who is familiar with **Ruby**, then the above code is not
difficult to absorb. To put simply, the process waits for `5000 ms` or an equivalent of `5 seconds` before actually printing the message `We're done here` in the console.

#### Output:
```markdown
# this message shows after 5 seconds
We're done here
```

Nothing unusual, right? After all, it is intuitive that a program executes each line starting from top to bottom.

However, **JavaScript is different.** Let's check how the above program behaves if we use
JavaScript.

```JavaScript
// async call
setTimeout(function () {
  console.log('I am async')
}, 5000)

console.log('hello world')
```

#### Output:

```markdown
hello world

# shows up after 5 seconds
I am async
```

As you have noticed, `hello world` showed up immediately and after some time has
passed, `I am async` shows up.

When an asynchronous function is called in JavaScript, it does not block
the program from running the following operations. Instead, it continues going down the path of execution until the program finishes.

### Let's talk about the Event Loop

Now that we had talked about the asynchronous nature of JavaScript, let's start tackling the topic we are waiting for. The reason why I explained the above
concept first is because it plays a major role in the process of running a program and understanding what the event loop really is.

Whenever JavaScript runs a line of code, it checks whether to put it in a
**call stack** or in an in-memory data structure called the **event table**.

Here's how the decision is made:

1. If the code is async, it goes to the event table.
2. Otherwise, put in the call stack.

Note that any item found in the call stack will be processed immediately. To make this more easier to understand, let's look at this example below.

```JavaScript
// This call goes to the event table.
setTimeout(() => console.log('one'), 2000)

// While this one goes to call stack
let name = 'Hello world from JS'
console.log(name)
```

When the call to `setTimeout` is ready to be called (after 2 seconds based on our setting), that
specific operation gets placed into a memory called **Event Queue**.

So to put simply, event queue contains all the operations that is ready to
be called by the event loop. It is also important to know that in this phase, the actual function call has not started yet.

This is where the event loop enters.

### Event Loop

An event loop basically checks an event queue repeatedly. But before that happens, it also needs to check the call stack. So to put this in perspective.

1. Event loop checks the call stack first.
2. If there is an item inside the call stack, it gets executed.
3. Only if the stack is empty that the event loop starts to run the operations
inside the event queue.

Understanding the steps, the code examples above are now making sense.

### Conclusion

Knowing the fundamentals of JavaScript is a vital skill to understand. With the constant growth of the JavaScript ecosystem, one essential thing we can do is
to understand the basics. This will save us a huge amount of time and makes it
easier to learn a new library and get going.

Happy reading!
