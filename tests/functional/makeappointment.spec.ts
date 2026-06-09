import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {
  test.beforeEach("login with valid creds", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    // Make an Appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("please login to make")).toBeVisible();

    await page.getByLabel("username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("should Make an appointment", async ({ page }) => {
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    await page.getByRole("radio", { name: "Medicare" }).check();
    await page.getByRole("radio", { name: "None" }).check();
    await page.locator("span").click();
    await page.getByRole("cell", { name: "14" }).click();
    await page.getByRole("textbox", { name: "Comment" }).fill("Testonh");
    await page.getByRole("button", { name: "Book Appointment" }).click();

    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(
      page.getByRole("link", { name: "Go to Homepage" }),
    ).toBeVisible();
  });
});
