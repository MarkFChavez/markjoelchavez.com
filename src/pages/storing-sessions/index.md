---
title: Storing sessions in JavaScript
date: 2020-02-05
---

There are three ways of storing sessions in your browser.

1) Local Storage
2) Session Storage
3) Cookies

In this article, I'll try to explain their differences so next time we're 
asked this question, we can reason better and choose the most useful of the
options.

### What is Local Storage?

Local Storage means using `localStorage` to store your key-value pair in the
browser. When using this way of storing, you don't lose the data even when:

- Closing and re-opening a browser tab.
- Closing and re-opening a browser.
- Restarting the computer.

The only way a data can be removed from the local storage is either using 
`localStorage.removeItem` to remove a specific key-value pair or clearing 
the browser memory.

### Session Storage

This type of storing is a bit far from what `localStorage` is. 

- The data survives a browser page refresh 
- Re-opening a browser tab or re-opening a browser removes the data
- Restarting the computer removes the data

Because of this limitation, `sessionStorage` is used less compared to `localStorage`.

### Cookies

Amongst the three options, I'd say cookies is the most efficient way of
storing sessions. It has the same similarities with `localStorage` but the special 
thing about cookies is that it is automatically sent on every HTTP request --
which only a web server can access. It allows us to store data better and most
especially for complex cases like a multi-step registration form where each step
goes to the web server.
