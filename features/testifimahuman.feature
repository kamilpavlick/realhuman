Feature: Test If I'm a human
  In order to check if I'm a human
  As a robot
  I need to click on button which is connected to captcha

  @javascript
  Scenario: Test captcha v3
    Given I am on "/realhuman/"
    And I wait "2" seconds
    When I press "checkIfIamAHuman"
    And I wait "1" seconds
    Then I should see "Yes, you are human"
