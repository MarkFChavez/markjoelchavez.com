---
title: Running a specific Rails migration
date: 2019-10-30
---

Today I learned an important thing on Rails migration. So apparently, each and
every migrations are actually also ActiveRecord models. For example, try running 
`ActiveRecord::SchemaMigration.all` in your rails console. See what I mean?

To be able to re-run a specific migration, you essentially remove it from the
database. It's pretty straightforward given that you know what schema version 
to run.


#### Step 1: Remove the schema version in the database. 

```ruby
VERSION_TO_RERUN = "<version here>"

version = ActiveRecord::SchemaMigration.find_by(version: VERSION_TO_RERUN)

version.destroy!
```

#### Step 2: Re-run database migration.

```ruby
$ rails db:migrate
```

That's it folks!

