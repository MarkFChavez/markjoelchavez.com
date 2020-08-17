---
title: "Fix: Terminal shows ^M when pressing newline"
date: 2020-08-15
---

Sometimes I get this issue when running certain commands in my terminal (on OSX) -- and the only solution
I find useful is running this command:

```ruby
$ ssty sane
```

That fixes the problem for me 100% of the time.
