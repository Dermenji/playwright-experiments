import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { SearchWidgetLocators } from "./searchWidgetLocators";

export class SearchWidget extends HelperBase {
  
  locators: SearchWidgetLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new SearchWidgetLocators();
  }

  async setSearchText(text: string) {
    await this.page.fill(this.locators.searchInput, text);
  }

  async openFirstResult() {
    await this.page.click(this.locators.firstresult);
  }

  async verifyResultsArePresent() {
    await this.page.waitForTimeout(500);
    var results = await this.page.$$(this.locators.items);
    await expect(results.length).toBeGreaterThan(0)
  }

  async clickClearResultsButton() {
    await this.page.click(this.locators.clearButton)
  }

  async verifyResultsAreEmpty() {
    var results = await this.page.$$(this.locators.items);
    await expect(results.length).toBeLessThan(1)
  }

  async closeUsingEscButton() {
    await this.pressEscapeKey();
    await expect(this.page.locator(this.locators.searchModal)).not.toBeVisible();
  }

  async verifyNoResultsPrefilListIsPresent() {
    await expect(this.page.locator(this.locators.noResults)).toBeVisible();
  }

  async verifySeeAllResultsIsPresent() {
    await expect(this.page.locator(this.locators.seeAllResults)).toBeVisible();
  }
}
