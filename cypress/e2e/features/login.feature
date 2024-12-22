Feature: Login Functionality

  Scenario: Successful Login
    Given I am on the login page
    When I enter "teste2021@teste.com.br" and "teste"
    And I click the login button
    Then I should see "Welcome" on the page
