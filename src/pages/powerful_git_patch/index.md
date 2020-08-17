---
title: Adding chunks of changes in Git
date: 2020-08-17
---

When I have multiple changes in one file and I plan to divide these into
separate/multiple commits, I always rely on git's patching capabilities to 
finish the job.

It's as simple as running `git add --patch` in your terminal then you go into
a series of questions of whether you want to `add/stage` a specific change or
not.

The feature I'm very thankful for is it allows us to `edit` a chunk further and
there's no limit to this.

Further reading: https://nuclearsquid.com/writings/git-add/
