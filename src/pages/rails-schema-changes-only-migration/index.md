---
title: Schema-only changes during Rails migration
date: 2020-05-16
---

Recently, I realized to write schema-only changes during migrations because it
produces far less errors in the future. This means avoiding the use of models
or service classes as part of your migration files.

When you use a model inside your migration, you're tight-coupling your model
to your database migration. I used to do this before:

```ruby
class Migration < ActiveRecord::Migration
  def change
    add_column :users, :status, :string, default: "pending", null: false

    User.reset_column_information

    User.all.find_each do |user|
      user.update(status: "completed") if user.enrolled?
    end
  end
end
```

Looking at the migration file alone, I see several reasons why this might fail
in the future. 

1. What if `User#enrolled?` won't exist 2 months from now?
2. What if we renamed `User` to `Customer` because it makes more sense at the
   time?

If these are the cases, then your migrations won't work anymore because
`enrolled?` and your model `User` are now tightly-coupled to your migration
process.

### Solution
Instead of adding your post-migration logic to the migration file directly,
place it somewhere in your Rails app instead (e.g. `db/scripts` or a **rake task**). 

```ruby
# db/scripts/add_user_status_migration.rb
User.all.find_each do |user|
  user.update(status: "completed") if user.enrolled?
end
```

Then after deployment, run the script using `rails runner`:

```ruby
$project bin/rails runner db/scripts/add_user_status_migration.rb
```

And lastly, remove the script because you won't need it anymore. 

If you get used to this workflow, then your migrations should always work 
-- keeping you away from unnecessary headaches.

Thanks!
