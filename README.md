# UI Automation Exercise
Write a UI end to end user test class (language of your choice) that launches a web browser and navigates to the WebdriverIO website (http://webdriver.io). Click on the 'API' link in the top navigation bar and load their API documentation (https://webdriver.io/docs/api). Use the search functionality on this page to search their API documentation for the text 'Click'. Validate the correct information/page is returned. Expand the “Protocols” section in the left navigation bar and have your test verify that the list under the Protocols section is correct. Lastly, create another set of test cases that would further test the functionality of this search widget. If possible use the Page Object model for element locators and helper functions.

## Run UI tests using Playwright

npx playwright test --project=chromium (headless mode)
npx playwright test --project=chromium --headed (browser mode - Chromium)
npx playwright show-report (Standart report) - Can be extended with Allure reporting if needed