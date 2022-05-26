import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";

// ======== TC-001 Make a search query on the "Webdriver.io" main page  =========
Given(/^I am on webdriverio page$/, async () => {
  await commonPage.openHomePage();

  await expect(homePage.container_docSearch).toBeDisplayed();
});
