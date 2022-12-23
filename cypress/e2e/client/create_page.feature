
Feature: Shoping Web Page
The online store must work in web browsers and on mobile devices.


Background: 
Given I navigate to the Home Page

Scenario: Sizes title
When I should see the "Sizes:" title
Then I can see small text "Leave a star on Github if this repository was useful :)"


Scenario: Products cantainer header
Then I should see "16Product(s) found" container header
And user can see cart on right side

Scenario: Sorter bar
Then I should see the inscription "Order by"
And I select on the "Select"
And I should see in sorter "Select"




