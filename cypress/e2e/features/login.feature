Feature: Login Functionality
  
  Scenario: Successful Login
    Given I am on the login pages
    When I enter "teste2021@teste.com.br" and "teste123"
    And I click the login button
    Then I should see "Logged in as" on the page
