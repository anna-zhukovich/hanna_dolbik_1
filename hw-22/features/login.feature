
Feature: Log in in onliner

  Scenario Outline: As a user, I can log into the onliner

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | foobar   | barfoo               | Неверный логин или пароль      |

  Scenario Outline: I should see a social log in buttons on the log in page

    Given I am on the login page
    Then I should see a social log in buttons on the log in page

  
  Scenario Outline: As a user, I can see Enter text on Log in Page 

    Given I am on the login page
    Then I should see a Enter text on the log in page
