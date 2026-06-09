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

test("should confirm all prices are non-Zero value", {tag: "@smoke"}, async({page})=> {
    //Get the list of Products
   let productElement= page.locator(".inventory_item");
   await expect(productElement).toHaveCount(6);
})
    })