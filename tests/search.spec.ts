import { test } from "../test-options";

test.describe("Verify Search widget", () => {

  test.beforeEach(async ({ pageManager }) => {
    await pageManager.navigateTo().mainPage();
    await pageManager.onTopNavigationSection().openAPIDocumentation();
    await pageManager.onTopNavigationSection().openSearchWidget();
  });

  test("User can clear reasults using clear button", async ({ pageManager }) => {
    await pageManager.onSearchWidget().setSearchText("click");
    await pageManager.onSearchWidget().verifyResultsArePresent();
    await pageManager.onSearchWidget().clickClearResultsButton();
    await pageManager.onSearchWidget().verifyResultsAreEmpty();
  });

  test("User can close Search Widget using Escape keyboard", async ({ pageManager }) => {
    await pageManager.onSearchWidget().closeUsingEscButton();
  });

  test("User navigates to no results view when set not valid entry", async ({ pageManager }) => {
    await pageManager.onSearchWidget().setSearchText("qwerty");
    await pageManager.onSearchWidget().verifyNoResultsPrefilListIsPresent();
  });

  test("Verify see all results is present", async ({ pageManager }) => {
    await pageManager.onSearchWidget().setSearchText("click");
    await pageManager.onSearchWidget().verifySeeAllResultsIsPresent();
  });
});
