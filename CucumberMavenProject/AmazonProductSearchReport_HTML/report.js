$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonProductSearching.feature");
formatter.feature({
  "line": 1,
  "name": "Searching for Products in Amazon Website",
  "description": "",
  "id": "searching-for-products-in-amazon-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 282500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to Search for necessary product",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ProductSearching1"
    },
    {
      "line": 3,
      "name": "@Unit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launches the website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user is on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enter name of the Product",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user should be able to find the Product",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_launches_the_website()"
});
formatter.result({
  "duration": 2500425800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_is_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 27172935400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_enter_name_of_the_Product()"
});
formatter.result({
  "duration": 6840763600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 178400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should be able to Search for necessary product",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ProductSearching1"
    },
    {
      "line": 10,
      "name": "@Unit"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\u003cproductName\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to find the Product \u0027\u003cproductName\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;",
  "rows": [
    {
      "cells": [
        "productName"
      ],
      "line": 18,
      "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;1"
    },
    {
      "cells": [
        "\"Samsung Mobile\""
      ],
      "line": 19,
      "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;2"
    },
    {
      "cells": [
        "\"Fridge\""
      ],
      "line": 20,
      "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;3"
    },
    {
      "cells": [
        "\"Camera\""
      ],
      "line": 21,
      "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 183200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to Search for necessary product",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ProductSearching1"
    },
    {
      "line": 10,
      "name": "@Unit"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"Samsung Mobile\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to find the Product \u0027\"Samsung Mobile\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_launches_the_website()"
});
formatter.result({
  "duration": 1299396900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_is_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 53057005400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Mobile",
      "offset": 17
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_enter(String)"
});
formatter.result({
  "duration": 13305317100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung Mobile",
      "offset": 46
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(String)"
});
formatter.result({
  "duration": 19524000,
  "error_message": "java.lang.AssertionError: expected [Amazon.in :Samsung Mobile] but found [Amazon.in : Samsung Mobile]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefination.AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(AmazonProducSearchingTest.java:52)\r\n\tat ✽.Then the user should be able to find the Product \u0027\"Samsung Mobile\"\u0027(AmazonProductSearching.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 98600,
  "status": "passed"
});
formatter.before({
  "duration": 131500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to Search for necessary product",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ProductSearching1"
    },
    {
      "line": 10,
      "name": "@Unit"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"Fridge\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to find the Product \u0027\"Fridge\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_launches_the_website()"
});
formatter.result({
  "duration": 1449347900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_is_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 94143595500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fridge",
      "offset": 17
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_enter(String)"
});
formatter.result({
  "duration": 13723087500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fridge",
      "offset": 46
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(String)"
});
formatter.result({
  "duration": 15232500,
  "error_message": "java.lang.AssertionError: expected [Amazon.in :Fridge] but found [Amazon.in : Fridge]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefination.AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(AmazonProducSearchingTest.java:52)\r\n\tat ✽.Then the user should be able to find the Product \u0027\"Fridge\"\u0027(AmazonProductSearching.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 118500,
  "status": "passed"
});
formatter.before({
  "duration": 144300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to Search for necessary product",
  "description": "",
  "id": "searching-for-products-in-amazon-website;user-should-be-able-to-search-for-necessary-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ProductSearching1"
    },
    {
      "line": 10,
      "name": "@Unit"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user is on Amazon Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user enter \u0027\"Camera\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user should be able to find the Product \u0027\"Camera\"\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_launches_the_website()"
});
formatter.result({
  "duration": 1274452900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonProducSearchingTest.the_user_is_on_Amazon_Home_Page()"
});
formatter.result({
  "duration": 27966628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Camera",
      "offset": 17
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_enter(String)"
});
formatter.result({
  "duration": 13351347400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Camera",
      "offset": 46
    }
  ],
  "location": "AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(String)"
});
formatter.result({
  "duration": 17622500,
  "error_message": "java.lang.AssertionError: expected [Amazon.in :Camera] but found [Amazon.in : Camera]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefination.AmazonProducSearchingTest.the_user_should_be_able_to_find_the_Product(AmazonProducSearchingTest.java:52)\r\n\tat ✽.Then the user should be able to find the Product \u0027\"Camera\"\u0027(AmazonProductSearching.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 163800,
  "status": "passed"
});
});