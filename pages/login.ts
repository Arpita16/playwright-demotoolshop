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
    await this.page.goto(process.env.URL+"/auth/login");
  }

  

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}