import { test } from "../test-options";

test.describe("User can load to API Dodumentation and use navigation bars", () => {
  
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.navigateTo().mainPage();
    await pageManager.onTopNavigationSection().openAPIDocumentation();
  });

  test("Load API documentation", async ({ pageManager }) => {
    await pageManager.onTopNavigationSection().openSearchWidget();
    await pageManager.onSearchWidget().setSearchText("click");
    await pageManager.onSearchWidget().openFirstResult();
    await pageManager.onResultPage().headerContains("click");
  });

  test("Verify Protocols section", async ({ pageManager }) => {
    await pageManager.onLeftNavigationBar().expandProtocols();
    await pageManager.onLeftNavigationBar().protocolsSectionHasListItems(9);
    await pageManager.onLeftNavigationBar().containsRequiredItems();
  });
});
