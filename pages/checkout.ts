import { Page} from "@playwright/test";
import { expect } from "@playwright/test";

export default class CheckoutPage {

    addressInput: any;
    cityInput: any;
    stateInput: any;
    countryInput: any;
    postcodeInput: any;

    constructor(public page: Page){
        this.page = page;
        this.addressInput = page.getByTestId("address");
        this.cityInput= page.getByTestId("city");
        this.countryInput = page.getByTestId("country");
        this.stateInput = page.getByTestId("state");
        this.postcodeInput = page.getByTestId("postcode");
    }
    async addProductToCart(){
        await this.page.getByText("Claw Hammer with Shock Reduction Grip").click();
        await this.page.getByTestId("add-to-cart").click();
        expect(this.page.getByTestId("cart-quantity")).toHaveText("1");
    }
    async proceedToCheckout(){
        await this.page.getByTestId("nav-cart").click();
        await this.page.getByTestId("proceed-1").click();
        await this.page.getByTestId("proceed-2").click();
        await expect(
          this.page.locator(".step-indicator").filter({ hasText: "2" })
        ).toHaveCSS("background-color", "rgb(51, 153, 51)");
    }
    async fillShippingDetails(){
        await this.page.getByTestId("street").fill("Centralvägen 21");
        await this.page.getByTestId("city").fill("Solna");
        await this.page.getByTestId("state").fill("Stockholm");
        await this.page.getByTestId("country").fill("Sweden");
        await this.page.getByTestId("postal_code").fill("17168");
        await this.page.getByTestId("proceed-3").click();
    }
    async selectPaymentMethod(){  
        await expect(this.page.getByTestId("finish")).toBeDisabled();
        await this.page.getByTestId("payment-method").selectOption("Buy Now Pay Later");
        await this.page
          .getByTestId("monthly_installments")
          .selectOption("6 Monthly Installments");
        await this.page.getByTestId("finish").click();
        await expect(this.page.locator(".help-block")).toHaveText(
          "Payment was successful" );
    }
}
