class SearchBarPage {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]");
    }

    get suggestPopup() {
        return $("form#szukanie div.suggest-list");
    } 

    get seeAllBooksBtn() {
        return $("li.wszystkie > p > a");
    }

    async clickOnSearchIcon() {
        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed;
        await icon.click();
    }

    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }

    async typeSearchPhrase(value: string) {
        const input:WebdriverIO.Element = await this.searchInput;
        
        await input.waitForDisplayed();
        await input.setValue(value);
        await browser.pause(300);
        await browser.keys(['Control', 'a']);

    }

   async suggestPopupIsVisible() {
    const popup:WebdriverIO.Element = await this.suggestPopup;
    await popup.waitForDisplayed();
   }

   async clickOnSeeAllBooksBtn() {
    const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
    await btn.waitForDisplayed();
    await btn.scrollIntoView();
    await btn.click();
   }

   async clearSearchBar() {
    const input:WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    await input.clearValue();
   }

   async getInputValue(): Promise<string> {
    const input:WebdriverIO.Element = await this.searchInput;
    await input.waitForDisplayed();
    return await input.getValue();

   }

   get notFoundAlert() {
    return $("div.not-found");
   }

   async getNotFoundAlertText():Promise<string> {
    const alert:WebdriverIO.Element = await this.notFoundAlert;
    await alert.waitForDisplayed();
    return await alert.getText();
   }



    
   }


export default new SearchBarPage();