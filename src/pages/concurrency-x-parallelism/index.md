---
title: Concurrency vs Parallelism
date: 2017-07-10
---

Concurrency and Parallelism are two of the most talked-about topics in computer
science. The reason why is because these are very important concepts to build a scalable,
reliable and fault-tolerant service. Also, there are a huge number of
discussions/debates as to what the differences are!

Most people thought in different ways which has spread several beliefs which has
obviously tattered the meanings of both terms. In fact, some people would say
**Concurrent = Parallel**, and another group would think otherwise.

Here's what Rob Pike (co-inventor of the Go language) had to say about this:

> Concurrency is about dealing with lots of things at once. Parallelism is about 
> doing lots of things at once.

Let me give you a real-world example.

### Taking Orders from a Restaurant

Let's just assume that I'm an owner of a small-sized restaurant here in the
Philippines.

#### Approach 1: Serial

Bob and John (customers) had ordered 1x spaghetti each. Once I received this
order, I'll prepare this by:

1. Cook the first Spaghetti
2. Send it to Bob
3. Cook the second Spaghetti
4. Send it to John

This is how the default setup in a language is like. It goes through the steps
serially by waiting for a process to finish before proceeding to a new one. So
if there's a long-running operation that is running, the next process should
wait for it to finish before it runs.

It sounds bad but it works most of the time.

#### Approach 2: Concurrent

While Bob and John are eating their delicious spaghettis made by yours truly;
Lisa, Rey, and Jack each ordered a watermelon shake. So to do this concurrently:

1. Slice the first watermelon for Lisa
2. Slice the second watermelon for Rey
3. And slice the third watermelon for Jack
4. Do watermelon stuff for Lisa
5. Do watermelon stuff for Rey
6. Do watermelon stuff for Jack
7. Send watermelon shake to Lisa
8. Send watermelon shake to Rey
9. Send watermelon shake to Jack

#### Approach 3: Parallel

Parallel is doing several tasks simultaneously so to take the above example and
make it work in a parallelized way, I would hire two more chefs; Billy and
Tophs.

1. Billy prepares the watermelon shake for Lisa
2. Tophs prepares the watermelon shake for Rey
3. And I prepare the watermelon shake for Jack

The good thing about this is it happens at the same time so it is obviously
faster than the previous approaches.

### What does it mean in a computer sense?

In computer sense, a code running **concurrently** means that it is executing a
number of different tasks at the same time by switching contexts regardless of how
many threads/workers/cores are available. With **parallel**, each tasks are mostly
ran at the same time, using a separate worker or a CPU core.

Depending on your programming language, the capability to do it successfully can
be easy or difficult. With a mutable language like Ruby, you have to deal with
things like `mutexes`, `shared states` and `thread safetiness` to prevent corrupt data.

Happy reading!



