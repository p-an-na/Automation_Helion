describe("blabla", async () => {
    it("Should", async () => {
        await browser.url("https://www.empik.com/");
        const select: WebdriverIO.Element = await $("div.css-18mrctc-root");
        await select.waitForDisplayed();
        browser.pause(4000);
        await select.click();
        const list:WebdriverIO.Element = await $("ta-cs-dropdown");
        select.waitForDisplayed();
        await list.selectByAttribute("value", "/bilety,55,s");

    })

    
})