Feature: Searching for Products in Amazon Website 

@ProductSearching1 @Unit
Scenario: User should be able to Search for necessary product
Given the user launches the website
Given the user is on Amazon Home Page
When the user enter name of the Product 
Then the user should be able to find the Product 

@ProductSearching1 @Unit
Scenario Outline: User should be able to Search for necessary product
Given the user launches the website
Given the user is on Amazon Home Page
When the user enter '<productName>' 
Then the user should be able to find the Product '<productName>'

Examples:
    |productName      | 
    |"Samsung Mobile" | 
    |"Fridge"         | 
    |"Camera"         | 
