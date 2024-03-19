Feature: Validate Functionality of Registration form of DemoQa Application

  @smoke
  Scenario: To validate the  Tools Qa Registration Form
    Given User launch the browser and launch web application
    When User enter the first name and last name
    When User enter the Email and MobileNo
    And User fill the Country and City
    Then User gives the required Messages

  Scenario Outline: To Vaidate the Multiple Users
    Given User launch the browser and launch web application
    When User have enter the "<first name>" and "<last name>"
    When User have enter "<Email>" and "<MobileNo>"
    And User fill the "<City>"
    Then User gives the required Messages

    Examples: 
      | first name | last name | Email            | MobileNo   | City       |
      | vimal      | kumar     | vimal@gmail.com  | 8189855465 | Chennai    |
      | ramesh     | kumar     | ramesh@gmail.com | 9489052227 | Kumbakonam |
      | dinesh     | kumar     | dinesh@gmail.com | 9876543213 | Trichy     |
