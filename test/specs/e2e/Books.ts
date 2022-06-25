import { booksUrl, helionHomeUrl, sortByPriceUrl } from "../../config/pagesUrl";
import BooksPage from "../../pages/components/BooksPage";


describe ("E2E - Books Page", async () => {
    before(() => {
        browser.url(helionHomeUrl);
    })


it("Should click on Books tab, and verify url", async () => {
    await BooksPage.clickOnBooksTab();
    await expect(browser).toHaveUrl(booksUrl);
})

it("Should sort books by price and verify url", async () => {
    await BooksPage.clickOnBooksTab();
    await BooksPage.sortByPrice();
    await expect(browser).toHaveUrl(sortByPriceUrl);

})

    

})
