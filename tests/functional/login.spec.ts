import { test, expect } from "@playwright/test";
test.describe("Login functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.amazon.in");
  });

  test.only("should load home page", async ({ page }) => {
    await page.locator("i.a-icon.a-icon-previous-rounded").click();

  });
});

//successfull Login
// await page.getByLabel("username").fill("John Doe")
//await page.getByLabel('Password').fill('ThisIsNotAPassword');
// await page.getByRole('button', { name: 'Login' }).click();

//Assert
// await expect (page.locator("h2")).toContainText("Make Appointment");

//});

//test("should prevent login with incorrect creds", async ({ page }) => {

//unsuccessfull Login
await page.getByLabel("username").fill("John Doe");
await page.getByLabel("Password").fill("ThisIsAPassword");
await page.getByRole("button", { name: "Login" }).click();

//Assert
await expect(page.locator("#login")).toContainText(
  "Login failed! Please ensure the username and password are valid.",
);
//});
