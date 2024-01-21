import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { LeftNavigationBarLocators } from "./leftNavigationBarLocators";

export class LeftNavigationBar extends HelperBase {
  locators: LeftNavigationBarLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LeftNavigationBarLocators();
  }

  async expandProtocols() {
    await this.page.click(this.locators.protocolsMenuCollapsed);
    expect(
      this.page.locator(this.locators.protocolsMenuExpanded)
    ).toBeVisible();
  }

  async protocolsSectionHasListItems(items: number) {
    const protocols = await this.page.$$(this.locators.listItems);
    await expect(protocols.length).toEqual(items);
  }

  async containsRequiredItems() {
    const expectedTexts = [
      "Appium",
      "Chromium",
      "Firefox",
      "JSON Wire Protocol",
    ];

    const protocols = await this.page.$$(this.locators.listItems);

    for (const expectedText of expectedTexts) {
      let textFound = false;
      for (const item of protocols) {
        const itemText = await item.innerText();
        if (itemText.includes(expectedText)) {
          textFound = true;
          break;
        }
      }

      expect(textFound).toBe(true);
    }
  }
}
