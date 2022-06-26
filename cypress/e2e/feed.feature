Feature: Feed

  Scenario: Paginated results
    Given I visit the home page
    When I do not scroll the page
    Then I see the first two pages of results

  Scenario: Load more results
    Given I visit the home page
    When I scroll the page
    Then I see the first three pages of results
