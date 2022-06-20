import { alertMessage, deletedProductMessage, searchPhrase } from "../../config/data"
import { cartUrl, helionHomeUrl, searchProductUrl } from "../../config/pagesUrl"
import CartPage from "../../pages/components/CartPage"
import ProductPage from "../../pages/components/ProductPage"
import SearchbarPage from "../../pages/components/SearchbarPage"
import SearchResultPage from "../../pages/SearchResultPage"

describe("E2E - Products", async () => {
    let productTitle: string = "";
    let price: string = "";

    before(() => {
        browser.url(helionHomeUrl)
    })

    it ("Should type search phrase and click search icon", async () => {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl)
    })

    it ("Should click on first book", async () => {
        await SearchResultPage.clickOnFirstBookItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtnIsVisibe();
        productTitle = await ProductPage.getProductTitleValue();
        price = await ProductPage.getProductPrice();
      
    })

    it ("Should click on add to cart button", async () => {
        await ProductPage.clickOnAddToCartBtn();
        await expect(browser).toHaveUrlContaining(cartUrl);
        await expect(await CartPage.getSuccesAlertValue()).toContain(productTitle);
        await expect (await CartPage.getTotalPriceValue()).toContain(price);
    })

    it("Should delete product form cart", async () => {
        await CartPage.clickOnCheckbox();
        await CartPage.clickonDeleteSelectedlabel();
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAlert();
        await expect(await CartPage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
        
    })










})