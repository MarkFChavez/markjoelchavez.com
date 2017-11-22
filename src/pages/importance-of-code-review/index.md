---
title: "Lesson Learned: The Importance of Code Reviews"
date: 2017-06-05
---

As one of the developers on our team, writing efficient and well-written code is a serious responsibility. Our current setup assumes that this is true though. Problem is, we don't have any system that enforces this discipline. To put simply, anyone on our team can push his/her code without someone actually checking it.

We all suck in giving estimates. If we are to deliver a feature and estimates go wrong, there is a possibility that we might push low-quality code, or even code without tests. To be honest, this is the case with my current team. Our **development-to-production**
cycle goes like this:

1. The developer writes the feature.
2. He pushes the code to `staging` environment.
3. QA tests the feature to make sure it's working.
4. QA either gives a "go" signal or "reopens" the task if there are issues.
5. Developer deploys to production.
6. Pray!

This has been our current setup from the start and it surprisingly worked for quite a long time. Then as time goes by, more complex features were added and **BUGS** kept growing, growing and growing. There were even times that `binding.pry` gets committed to production and I'm not even kidding.

![image-title-here](/importance-of-code-review.png)

It is only today when we realized how really important it is to enforce a code review discipline to our team. After a number of
discussions on this topic, we decided to implement a <a href="https://gist.github.com/Chaser324/ce0505fbed06b947d962">Standard Fork & Pull Request</a> workflow that goes like this:

1. The developer forks the original repository.
2. He will write features or bug fixes on his/her forked repository.
3. He creates a new pull request.
4. A reviewer will be assigned to the PR.
5. From this point on, the reviewer can either suggest a better solution or;
6. The reviewer will approve the PR and merge it on the `master` branch.
7. The `master` branch will then be pushed to `staging` for testing by the team's QA.
8. After approval, the `master` branch will be pushed to production.

This workflow has added a number of extra steps, but we are now confident that no bug gets pushed or at least, the possibility is very minimal. It also enforces our team to communicate and get better as time goes on.

What is your team's workflow? I am more than happy to know it. Let's <a href="mailto:{{site.email}}">talk</a>!
