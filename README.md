# playwright-demotoolshop

## Playwright Testing Project with TypeScript and Page Object Model (POM)

### 📌 Overview

This repository contains an automated testing framework using Playwright with TypeScript, following the Page Object Model (POM) design pattern. It enables efficient test automation for web applications with better maintainability and scalability.

This Project contains an open source website("https://practicesoftwaretesting.com/") UI testing Framework for HomePage,LoginPage,add a product to cart and checkout process.

1.Login to application using the link(("https://practicesoftwaretesting.com/")

2.Validate sign in and page title are correct.

3.There is a search button on home page,search for "Thor Hammer".

4. Validate the number of item is correct and properly visible.

5.Login with Valid credential to the application.

6.Validate correct username is showing instead of sign in button.

7.Capture the login details in cookies and use this same login details to do checkout of a product.

8.Search for "Claw Hammer with Shock Reduction Grip" and add this item to cart.

9.Check the cart item should be 1.

10.Fill all the details as logged in user and do the checkout process.

11."Payment was successful" should be visible on the checkout page.

### 🛠️ Tech Stack

- Playwright 🕵️‍♂️ (End-to-end testing)

- TypeScript ⌨️ (Strongly typed JavaScript)

- Jest/Test Runner 🧪 (Test execution)

- Page Object Model (POM) 📄 (Design pattern for better test structure)

  📂 **Project Structure**

       📦 playwright-demotoolshop
            ┣ 📂 tests
            ┃ ┣ 📜 auth.setup.ts
            ┃ ┣ 📜 checkoutpage.spec.ts
            ┃ ┣ 📜 homepage.spec.ts
            ┃ ┣ 📜 loginpage.spec.ts
            ┣ 📂 pages
            ┃ ┣ 📜 checkout.ts
            ┃ ┣ 📜 login.ts
            ┣ 📜 playwright.config.ts
            ┣ 📜 package.json
            

### 🚀 Installation & Setup

   **1.Clone the repository**
  
      git clone https://github.com/Arpita16/playwright-demotoolshop.git
      cd playwright-demotoolshop

   **2.Install dependencies**

       npx playwright install

   **3.Install Playwright browsers**

        npx playwright install


### 📌  Page Object Model (POM) Implementation 
  The Page Object Model (POM) helps in organizing locators and actions for different pages.
  
  **Example** : pages/login.ts

        import {Page } from "@playwright/test";

        export default class LoginPage {

                   emailInput: any;
                   passwordInput: any;
                   loginButton: any;

               constructor(public page: Page){
               this.page = page;
               this.emailInput = page.getByTestId("email");
               this.passwordInput = page.getByTestId("password");
               this.loginButton = page.getByTestId("login-submit");

              }
              async goto() {
                        await this.page.goto("https://practicesoftwaretesting.com/");
                   }

              async signIn() {
                        await this.page.getByTestId("nav-sign-in").click();
                    }

             async login(email: string, password: string) {
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
             }
        }


### 🧪 Writing Tests
  Tests are written using Playwright Test Runner.

 **Example**: tests/loginpage.spec.ts

     import { test, expect } from "@playwright/test";
     import LoginPage from "../pages/login";
     
      test("Login with valid credential using page object", async ({ page }) => {
           const loginPage = new LoginPage(page);
           await loginPage.goto();
           await loginPage.signIn();
           await loginPage.emailInput.fill("customer@practicesoftwaretesting.com");
           await loginPage.passwordInput.fill("welcome01");
           await loginPage.loginButton.click();
           await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
          });

### 🛠 Running Tests

- Run all tests
              
               npx playwright test

- Run tests in headed mode (with UI)
      
               npx playwright test --headed

- Run tests with a specific file
      
               npx playwright test tests/loginpage.spec.ts

### 📊 Test Reporting

- The framework generates an HTML report in    playwright-report/.
   
- Run the following command to view reports:
    
               npx playwright show-report

### 🛡️ CI/CD Integration
  
  You can integrate Playwright with **GitHub Actions** by adding    .github/workflows/playwright.yml.

   Example CI/CD workflow:

           name: Playwright Tests
           on: [push, pull_request]
           jobs:
              test:
                 runs-on: ubuntu-latest
                 steps:
                      - name: Checkout Repository
                        uses: actions/checkout@v3
                      - name: Install Dependencies
                        run: npm install
                      - name: Install Playwright Browsers
                        run: npx playwright install
                      - name: Run Tests
                        run: npx playwright test

### 📌 Additional Playwright Commands

- Debug tests
  
        npx playwright test --debug

- Run tests in different browsers

         npx playwright test --browser=firefox

















  
