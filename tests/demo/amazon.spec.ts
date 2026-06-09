import { test, expect } from "@playwright/test";
test.describe("Login functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.amazon.in");
  });

  test.only("should load home page", async ({ page }) => {
    await page.locator("i.a-icon.a-icon-previous-rounded").first().click();
    

  });
});