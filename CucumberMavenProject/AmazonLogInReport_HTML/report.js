$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Amazon Website",
  "description": "",
  "id": "login-to-amazon-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 208600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to login to the application with valid credentails",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login1"
    },
    {
      "line": 3,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user is on the Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enter valid user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginTest.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 2456961300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_is_on_the_Amazon_login_page()"
});
formatter.result({
  "duration": 17759955500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_enter_valid_user_name_and_password()"
});
formatter.result({
  "duration": 5606420500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 2596123800,
  "status": "passed"
});
formatter.after({
  "duration": 169600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should be able to login to the application with valid credentails",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login2"
    },
    {
      "line": 10,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on the Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to login to the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;1"
    },
    {
      "cells": [
        "\"sourav123@gmail.com\"",
        "\"123456\""
      ],
      "line": 18,
      "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;2"
    },
    {
      "cells": [
        "\"sourav123456@gmail.com\"",
        "\"3245678\""
      ],
      "line": 19,
      "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;3"
    },
    {
      "cells": [
        "\"sourav234@gmail.com\"",
        "\"7865432\""
      ],
      "line": 20,
      "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 216400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to login to the application with valid credentails",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login2"
    },
    {
      "line": 10,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on the Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"sourav123@gmail.com\"\u0027 and \u0027\"123456\"\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginTest.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 1319530500,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_is_on_the_Amazon_login_page()"
});
formatter.result({
  "duration": 27405555400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourav123@gmail.com",
      "offset": 17
    },
    {
      "val": "123456",
      "offset": 45
    }
  ],
  "location": "AmazonLoginTest.the_user_enter_and(String,String)"
});
formatter.result({
  "duration": 3710814900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 5128631100,
  "status": "passed"
});
formatter.after({
  "duration": 149500,
  "status": "passed"
});
formatter.before({
  "duration": 178800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to login to the application with valid credentails",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login2"
    },
    {
      "line": 10,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on the Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"sourav123456@gmail.com\"\u0027 and \u0027\"3245678\"\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginTest.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 1325987800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_is_on_the_Amazon_login_page()"
});
formatter.result({
  "duration": 29295990200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourav123456@gmail.com",
      "offset": 17
    },
    {
      "val": "3245678",
      "offset": 48
    }
  ],
  "location": "AmazonLoginTest.the_user_enter_and(String,String)"
});
formatter.result({
  "duration": 3423943900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 4367570300,
  "status": "passed"
});
formatter.after({
  "duration": 107400,
  "status": "passed"
});
formatter.before({
  "duration": 208300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to login to the application with valid credentails",
  "description": "",
  "id": "login-to-amazon-website;user-should-be-able-to-login-to-the-application-with-valid-credentails;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login2"
    },
    {
      "line": 10,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on the Amazon login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"sourav234@gmail.com\"\u0027 and \u0027\"7865432\"\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLoginTest.the_user_launches_the_browser()"
});
formatter.result({
  "duration": 1326707800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_is_on_the_Amazon_login_page()"
});
formatter.result({
  "duration": 39735918200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourav234@gmail.com",
      "offset": 17
    },
    {
      "val": "7865432",
      "offset": 45
    }
  ],
  "location": "AmazonLoginTest.the_user_enter_and(String,String)"
});
formatter.result({
  "duration": 3869151200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonLoginTest.the_user_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 5893685600,
  "status": "passed"
});
formatter.after({
  "duration": 113600,
  "status": "passed"
});
});