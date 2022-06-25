import { priceValue } from "../../config/data";

class BooksPage {

    get booksTab() {
        return $("div.main-menu-container  a");
    }

    get sortBy() {
        return $("#selectSort + span")
    }

    get selectPrice() {
        return $('.select2-container--open li:nth-child(3)');

    }



    async clickOnBooksTab() {
        const booksTab:WebdriverIO.Element = await this.booksTab;
        await booksTab.waitForDisplayed();
        await booksTab.click();
    }

    async clickOnSortBy() {
        const sort:WebdriverIO.Element = await this.sortBy;
        await sort.waitForDisplayed();
        await sort.click();
    }

    async sortByPrice() {
        this.clickOnSortBy();
        const price:WebdriverIO.Element = await this.selectPrice;
        await price.waitForDisplayed ({ timeout: 3000 });
        await price.click();
        
    }






        


        

    

}

export default new BooksPage();