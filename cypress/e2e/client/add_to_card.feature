Feature: Add to Cart and Delete items

Background: 
Given I navigate to the Home Page
And I select "Add to cart" products item


Scenario: Add to cart Products T-Shirts
When I should see my Cart container open
And I see in baq quantti 
And inside on my Cart I see my items
Then I should see "SUBTOTAL"
And I click "Checkout"

Scenario: Delete items
When inside on my Cart I see my items
And I remove items from Cart
Then I should see the message "Add some products in the cart :)"
And I should close Cart