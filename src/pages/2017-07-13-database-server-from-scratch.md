---
layout: post
title: Building a Mock Database Server from Scratch in Elixir
category: elixir
---

Hello again! So I decided to build a mock database server in Elixir without
using **GenServer**. In the real world, this is probably something that we
won't do since **GenServer** provides pretty much all the capabilities that
a server would need.

<!--break-->

First, I want to let you know that the working code is on my GitHub account. You
can check the repo by clicking [here](https://github.com/mrkjlchvz/mock_database_server).

### How does it work?

Basically, what this does is mock a running database server that of course, runs
in an individual long-running server process. In this context, a **long-running
server process** is just a method that does a tail recursion which means it
continuously listens for messages in its process mailbox.

### What is a process mailbox?

Every time you send a message to a process, that process then stores the
message in a mailbox. If the process is ready to receive one, it will process
the first message that happens to be inserted first similar to a FIFO queue.

### Starting the server process

Starting up the server is a trivial job.

```
def start do
  spawn(&loop/0)
end
```

Calling the **start** method spawns a new process that calls **loop**.

```
defp loop do
  receive do
    {:run_query, caller, query_def} ->
      send(caller, {:query_result, run_query(query_def)})
  end

  loop()
end

defp run_query(query_def) do
  :timer.sleep(2000)
  "Query result: #{query_def}"
end
```

The **loop** method is the one responsible for continuously receiving
messages from its clients. I marked it as a private method because it does not
need to be called outside the module and that's fine. As you have noticed, `loop()` is
executed every time the method ends. This is called recursion and lets
the server handle continuous messages.

### Sending the query to the server

```
def send_query(server_pid, query_def) do
  caller = self()
  send(server_pid, {:run_query, caller, query_def})
end
```

Sending a message to the server is a trivial task at least for the app that we
are building. It's as easy as sending the message back to the caller.

### Getting messages back

Since the server is sending us the query result, there should be a way for the
client to fetch those results. You might think at this point that you can just
easily execute a `receive` method with a block and there's nothing wrong with
that.

```
# client (e.g. shell)
receive do
  {:query_result, result} -> IO.inspect(result)
end
```

It's generally a good practice to provide this functionality to the
`DatabaseServer`.

```
defmodule DatabaseServer do
  def get_result do
    receive do
      {:query_result, result} -> IO.inspect(result)
    end
  end
end
```

With this method that we added, the client only needs to call `get_result` and
the module will take care of it.

### Testing the Database Server

```
# start server process
pid = DatabaseServer.start()

# send a query to the server
DatabaseServer.send_query(pid, {:run_query, "sample query"})

# get the result
DatabaseServer.get_result()
```

Please take note that the database server is processing all the messages
synchronously. That means if you send 5 messages to a single server
process, it will neither be concurrent nor parallel. Therefore, the last
query's result will be available after 10 seconds (:timer.sleep).

With Elixir, it is always best to consider if a problem can be run
concurrently or parallel so in this case, maybe creating a pool of
database servers will help.

That's all for now. Happy reading!

