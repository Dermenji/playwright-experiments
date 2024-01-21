import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async mainPage() {
    await this.page.goto("/");
  }
}
