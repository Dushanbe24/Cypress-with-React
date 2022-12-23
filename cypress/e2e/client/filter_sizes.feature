Feature: Filter available size
As a user, I have the ability to choose sizes.
The main product must use a regular thumbnail image.

Background: Navigate to the Home Page
Given I navigate to the Home Page


Scenario: Ability to see and Choice of sizes
When I see unchecked available sizes:
    | XS        |
    | S         |
    | M         |
    | ML        |
    | L         |
    | XL        |
    | XXL       |



Scenario: Choice of sizes
When I have selected all item sizes
Then I should see my chosen sizes




