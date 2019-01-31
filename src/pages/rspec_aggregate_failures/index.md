---
title: "RSpec: Using the `aggregate_failures` block"
date: 2019-01-31
---

Sometimes I add multiple RSpec expectations in my tests. Here's how it usually
looks like.

```ruby
it "does things correctly" do
  expect(1).to eq 2
  expect(true).to eq false
  expect(String).to be_a Integer
end
```

Running the test above will tell you that your first expectation has 
failed. It won't tell you of the two other expectations. By default, this is
how RSpec manage test expectations. In such cases, I find using
`aggregate_failures` useful as it gives me more time working on the actual
implementation. 

Let's apply this feature to our above example.

```ruby
it "does things correctly" do
  aggregate_failures do
    expect(1).to eq 2
    expect(true).to eq false
    expect(String).to be_a Integer
  end
end
```

This should tell you all failed expectations at once.

