import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
     test.beforeEach(async ({ page }) => {
     await page.goto("https://practicesoftwaretesting.com/");
      
   });

  
   test("Login with valid credentials", async ({ page }) => {

    await page.getByTestId("nav-sign-in").click();
    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01");
    await page.getByTestId("login-submit").click();
    await expect(page.locator('[data-test="nav-menu"]')).toContainText("Jane Doe");
    await expect(page.locator('[data-test="page-title"]')).toContainText("My account");
    }); 
});