import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login";

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

test.only("Login with valid credential using page object", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.signIn();
  await loginPage.emailInput.fill("customer@practicesoftwaretesting.com");
  await loginPage.passwordInput.fill("welcome01");
  await loginPage.loginButton.click();
  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
});