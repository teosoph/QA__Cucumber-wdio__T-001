import { Given, When, Then } from "@cucumber/cucumber";
import homePage from "../pageobjects/home.page";

When(/^I click on search$/, async () => {
  await homePage.clickOnContainerDocSearch();
  console.log("-------- The search input modal window is opened  --------");
  await browser.pause(2000);

  await homePage.clickOnInputDocSearch();
  console.log("-------- The search input is activated  --------");
  await browser.pause(2000);
});

Then(/^I type text to search$/, async () => {
  console.log("-------- The Search query creation --------");
  // Random Search Data
  const randomStr = Math.random().toString(36).substr(2, 5);
  const searchData = `mySearchQuery_${randomStr}`;

  // Fill the search input by random data
  await homePage.fillDataToSearchInput(searchData);
  // await homePage.fillDataToSearchInput("waitForExist");
  await browser.pause(2000);

  // Send the "ENTER" command
  await browser.keys("\uE007");
  await browser.pause(4000);
});
