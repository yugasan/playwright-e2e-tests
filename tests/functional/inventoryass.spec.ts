import{test, expect} from "@playwright/test"

test.describe("Inventory Feature", ()=> {
    test.beforeEach("Login with Valid creds", async({page})=> {

        //Launch the URL
      await  page.goto("https://www.saucedemo.com/") 
      //Login
    
      await page.locator('[data-test="username"]').fill("standard_user");
      await page.locator('[data-test="password"]').fill("secret_sauce");
         await page.locator('[data-test="login-button"]').click();
         //Assertion
         await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
         //Partial match
         await expect(page).toHaveURL(/.*\/inventory/)
    
});
//Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home

test("Add 1st Product to the cart", async({page})=> {
await page.locator('[data-test="inventory-item-description"]').nth(0).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('yuva');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('rani');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('600125');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText("Thank you for your order!")
   
})
    })