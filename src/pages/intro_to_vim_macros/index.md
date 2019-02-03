---
title: Introduction to Vim Macros
date: 2019-02-02
---

## What's a Vim Macro?
A vim macro is simply a recorded series of commands. It can be used to
effectively repeat complex commands quickly without the hassle of typing 
more keystrokes. Essentially, it allows you to save time and focus on the 
problem at hand. To be able to teach you how this work, let me show you a 
real-world example.

## Converting a series of names to a Hash

Open a new file called `names_and_ages.txt` or any filename you prefer. Make 
sure the contents of the file is equal to the one below.

```
# names_and_ages.txt

Mark 20
Michael 18
Erik 15
Joni 10
```

Our end goal is to format every line to look like this:

```
# names_and_ages.txt

{ name: "Mark", age: 20 }
{ name: "Michael", age: 18 }
{ name: "Erik", age: 15 }
{ name: "Joni", age: 10 }
```

When this is done, you'll notice that a `recording` text will show up at
the bottom of your vim editor. This means that whatever you do after will get 
recorded to that macro. Press `q` again in `NORMAL` mode and the macro is now 
available for use. To run the macro, press `@f` where `f` is the name of your
macro.

## Recording the Macro

To record a macro, you press `q` in `NORMAL` mode followed by a character of
your choice. For example, `qf` will start to record a macro registered to 
`f`. You can end the recording by going back to `NORMAL` mode and pressing 
`q` once again.

![recording-macro](https://media.giphy.com/media/fxyXTmvwvSrx2fqXpK/giphy.gif)

## Applying the Macro

We can apply the macro in two ways:

(1) Running the macro manually on a per-line basis. To do this, we press `qf` in 
`NORMAL` mode for each line since we registered the macro using the `f` key.

![per-line](https://media.giphy.com/media/9SJ0zYTscuklaY2RwK/giphy.gif)

(2) Running the macro for all lines in a single command. We can do this by
running `<x>qf` in `NORMAL` mode where `x` is the number of times you want to
run it. In our example we only need to run it three more times so the command
would be `3qf`.

![multiple-lines](https://media.giphy.com/media/p3UvAQwCJK3MH2AAFo/giphy.gif)

