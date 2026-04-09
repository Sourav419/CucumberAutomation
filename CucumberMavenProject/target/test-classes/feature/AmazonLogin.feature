Feature: Login to Amazon Website 

@Login1 @Functional
Scenario: User should be able to login to the application with valid credentails 
Given the user launches the browser 
Given the user is on the Amazon login page 
When the user enter valid user name and password 
Then the user should be able to login to the application 

@Login2 @Functional
Scenario Outline: User should be able to login to the application with valid credentails 
Given the user launches the browser
Given the user is on the Amazon login page
When the user enter '<username>' and '<password>'
Then the user should be able to login to the application
 Examples:
    |username                 | password  |
    |"sourav123@gmail.com"    | "123456"  |
    |"sourav123456@gmail.com" | "3245678" |
    |"sourav234@gmail.com"    | "7865432" |