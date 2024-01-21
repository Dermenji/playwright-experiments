import { test as base } from "@playwright/test"
import { PageManager } from "./page-objects/navigationManager"

export type TestOptions = {
  pageManager: PageManager
}

export const test = base.extend<TestOptions>({
  pageManager: async ({ page }, use) => {
    const pm = new PageManager(page)
    await use(pm)
  }
})