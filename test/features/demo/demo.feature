Feature: Demo Feature

    # Feature Description
    # @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search results
        Then URL should match <ExpectedURL>

        Examples:
            | TestID      | SearchItem | ExpectedURL           |
            | Demo_TC_001 | WDIO       | https://webdriver.io/ |
