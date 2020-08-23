---
title: "Fixing inconsistent tests with RSpec"
date: 2020-08-23
---

One of the things I use to fix inconsistent tests is to use RSpec's
`bisect` command. What it does is divide the whole test suite into smaller
groups and does its best to return a command to reproduce the failing test.

I learned bisect together with the concept of **random seed**. Apparently, RSpec
randomizes the order of tests in the suite. This means you can pass a particular 
seed when running the tests `bundle exec rspec spec --seed <seed>` and it'll run 
the same order of tests given the seed.

Given this information, we can combine seed and bisect to possibly determine
the root cause of the issue(s).

```
$ bundle exec rspec spec --seed <seed> --bisect
```

More reading: https://medium.com/skills-matter/find-the-cause-of-randomly-failing-tests-with-rspec-bisect-dfe9ee2a70c2
