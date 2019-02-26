---
title: Using Page Object To Improve Feature Tests
date: 2019-02-26
---

Take a look at this feature test for a moment.

```ruby
RSpec.describe 'User creates the product' do
  describe "creating a product" do
    it "gets created" do
      visit new_product_path
      fill_in "Name", with: "iPhone XS"
      click_on "Save"

      expect(page).to have_content "Product created!"
    end
  end
end
```

One way of approaching this is using a page object. It looks 
something like this.

```ruby
# spec/support/pages/product.rb"
module Pages
  class Product
    include Rails.application.routes.url_helpers
    include Capybara::DSL

    def initialize(name:)
      @name = name
    end

    def create
      visit new_product_path
      fill_in "Name", with: "iPhone XS"
      click_on "Save"
    end

    def created?
      page.has_content?("Product created!")
    end
  end
end
```

Then you can rewrite your test by using the page object you 
created.

```ruby
RSpec.describe 'User creates the product' do
  describe "creating a product" do
    it "gets created" do
      name = "iPhone XS"
      product_on_page = Pages::Product.new(name: name)
      product_on_page.create

      expect(product_on_page).to be_created
    end
  end
end
```

This is only something I learned recently and so I wonder how helpful 
page objects will be given complex flows/experience. Personally, I'll push
for using page objects only when it's necessary.

