import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";
import { ResultPageLocators } from "./resultPageLocators";

export class ResultPage extends HelperBase {
  locators: ResultPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ResultPageLocators();
  }

  async headerContains(header: string) {
    const headerText = await this.page.innerText(this.locators.header);
    await expect(headerText).toContain(header);
  }
}
