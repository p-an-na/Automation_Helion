import GlobalPage from "../../pages/GlobalPage";
import { helionHomeUrl, notFoundUrl, searchPageUrl } from "../../config/pagesUrl";
import SearchBarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";

describe("E2E - Searchbar", async () => {
    it("Should open Helion home page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl)
        await SearchBarPage.searchBarIsVisible();
    })

    it("Should click on search icon, and verify url", async () => {
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("Should type search value and verify visible popup", async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.searchBarIsVisible();

    })

    it ("Should click on see all books button", async () => {
        await SearchBarPage.clickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    
    })

    it ("Should verify visible corectly title and number of books", async () => {
        const title:string = await SearchResultPage.getPageTitle();
        const numberOfBooks: number = await SearchResultPage.getNumberofBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })

    it ("Should clear input value", async () => {
        await SearchBarPage.clearSearchBar();
        await expect (await SearchBarPage.getInputValue()).toContain("");
    })

    it("Should type incorrect book name and verify alert", async () => {
        await SearchBarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(await SearchBarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async () => {
        await SearchBarPage.clearSearchBar();
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect (await SearchBarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })












})
