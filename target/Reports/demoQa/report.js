$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Regstration.feature");
formatter.feature({
  "name": "Validate Functionality of Registration form of DemoQa Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Vaidate the Multiple Users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch the browser and launch web application",
  "keyword": "Given "
});
formatter.step({
  "name": "User have enter the \"\u003cfirst name\u003e\" and \"\u003clast name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User have enter \"\u003cEmail\u003e\" and \"\u003cMobileNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User fill the \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User gives the required Messages",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "Email",
        "MobileNo",
        "City"
      ]
    },
    {
      "cells": [
        "vimal",
        "kumar",
        "vimal@gmail.com",
        "8189855465",
        "Chennai"
      ]
    },
    {
      "cells": [
        "ramesh",
        "kumar",
        "ramesh@gmail.com",
        "9489052227",
        "Kumbakonam"
      ]
    },
    {
      "cells": [
        "dinesh",
        "kumar",
        "dinesh@gmail.com",
        "9876543213",
        "Trichy"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Vaidate the Multiple Users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser and launch web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_browser_and_launch_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter the \"vimal\" and \"kumar\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter \"vimal@gmail.com\" and \"8189855465\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the \"Chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_fill_the_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gives the required Messages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_gives_the_required_Messages()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Vaidate the Multiple Users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser and launch web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_browser_and_launch_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter the \"ramesh\" and \"kumar\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter \"ramesh@gmail.com\" and \"9489052227\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the \"Kumbakonam\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_fill_the_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gives the required Messages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_gives_the_required_Messages()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Vaidate the Multiple Users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser and launch web application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_browser_and_launch_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter the \"dinesh\" and \"kumar\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have enter \"dinesh@gmail.com\" and \"9876543213\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill the \"Trichy\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_fill_the_and(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gives the required Messages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_gives_the_required_Messages()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});