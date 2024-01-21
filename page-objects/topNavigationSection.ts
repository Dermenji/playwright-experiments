import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { TopNavigationLocators } from "./topNavigationLocators";

export class TopNavigationSection extends HelperBase {
  locators: TopNavigationLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new TopNavigationLocators();
  }

  async openAPIDocumentation() {
    await this.page.click(this.locators.linkApi);
  }

  async openSearchWidget() {
    await this.page.click(this.locators.searchInput);
    await expect(this.page.locator(this.locators.searchModal)).toBeVisible();
  }
}
