import { Page } from "@playwright/test";
import { NavigationPage } from "./navigationPage";
import { TopNavigationSection } from "./topNavigationSection";
import { SearchWidget } from "./searchWidget";
import { ResultPage } from "./resultPage";
import { LeftNavigationBar } from "./leftNavigationBar";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly topNavigationSection: TopNavigationSection;
  private readonly searchWidget: SearchWidget;
  private readonly resultPage: ResultPage;
  private readonly leftNavigationBar: LeftNavigationBar;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.topNavigationSection = new TopNavigationSection(this.page);
    this.searchWidget = new SearchWidget(this.page);
    this.resultPage = new ResultPage(this.page);
    this.leftNavigationBar = new LeftNavigationBar(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onTopNavigationSection() {
    return this.topNavigationSection;
  }

  onSearchWidget() {
    return this.searchWidget;
  }

  onResultPage() {
    return this.resultPage;
  }

  onLeftNavigationBar() {
    return this.leftNavigationBar;
  }
}
