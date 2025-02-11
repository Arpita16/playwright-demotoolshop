# playwright-demotoolshop

### Playwright Testing Project with TypeScript and Page Object Model (POM)

📌 **Overview**

This repository contains an automated testing framework using Playwright with TypeScript, following the Page Object Model (POM) design pattern. It enables efficient test automation for web applications with better maintainability and scalability.

🛠️ **Tech Stack**

- Playwright 🕵️‍♂️ (End-to-end testing)

- TypeScript ⌨️ (Strongly typed JavaScript)

- Jest/Test Runner 🧪 (Test execution)

- Page Object Model (POM) 📄 (Design pattern for better test structure)

  📂 **Project Structure**

       📦 playwright-demotoolshop
            ┣ 📂 tests
            ┃ ┣ 📜 login.spec.ts
            ┃ ┣ 📜 dashboard.spec.ts
            ┣ 📂 pages
            ┃ ┣ 📜 LoginPage.ts
            ┃ ┣ 📜 DashboardPage.ts
            ┣ 📂 utils
            ┃ ┣ 📜 helpers.ts
            ┣ 📜 playwright.config.ts
            ┣ 📜 package.json
            ┣ 📜 tsconfig.json
            ┗ 📜 README.md

🚀 **Installation & Setup**

   **1.Clone the repository**
  
      git clone https://github.com/your-username/playwright-testing-project.git
      cd playwright-testing-project

   **2.Install dependencies**

       npx playwright install

   **3.Install Playwright browsers**

        npx playwright install


### 📌  Page Object Model (POM) Implementation 
  The Page Object Model (POM) helps in organizing locators and actions for different pages.
  
  **Example** : pages/LoginPage.ts

        import { Page } from '@playwright/test';

        export class LoginPage {
                constructor(private page: Page) {}

           async navigate() {
                   await this.page.goto('https://example.com/login');
               }

          async login(username: string, password: string) {
          await this.page.fill('#username', username);
          await this.page.fill('#password', password);
          await this.page.click('button[type="submit"]');
        }
    }


### 🧪 Writing Tests
  Tests are written using Playwright Test Runner.

 **Example**: tests/login.spec.ts

     import { test, expect } from '@playwright/test';
     import { LoginPage } from '../pages/LoginPage';

       test('User should be able to log in', async ({ page }) => {
           const loginPage = new LoginPage(page);
           await loginPage.navigate();
           await loginPage.login('testuser', 'password123');
          expect(await page.url()).toBe('https://example.com/dashboard');
        
    });

### 🛠 Running Tests

- Run all tests
              
               npx playwright test

- Run tests in headed mode (with UI)
      
               npx playwright test --headed

- Run tests with a specific file
      
               npx playwright test tests/login.spec.ts

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

















  
