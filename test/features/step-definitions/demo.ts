import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";


Given(/^Google page is opened$/, async function name() {
    // console.log(`------Before the run------`);
    await browser.url("https://www.google.com/");
    await browser.pause(1000);
    // console.log(`------After the run------`);
})

When(/^Search with (.*)$/, async function (searchItem) {
    console.log(`>> searchItem: ${searchItem}`);
    let ele = $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter");
})

Then(/^Click on the first search results$/, async function () {
    let ele = await $(`<h3>`);
    ele.click();
})

Then(/^URL should match (.*)$/, async function (expectedUrl) {
    console.log(`>> expectedUrl: ${expectedUrl}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedUrl);
})

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({
        implicit: 15000,
        pageLoad: 10000
    });
    await browser.maximizeWindow();
})

When(/^Perform web interactions$/, async function () {
    /**
     * 1. Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just add value
     * 3. Click and type
     * 4. Slow typing
     */

    let ele = await $(`[type="number"]`);

    await ele.click();
    // await ele.moveToElement();
    // await ele.scrollIntoView();
    
    let num = 12345;
    let strNum = num.toString();

    // await ele.setValue(strNum);

    for (let index = 0; index < strNum.length; index++) {
        let charStr = strNum.charAt(index);
        await browser.pause(1000);
        await browser.keys(charStr);
    }
    await browser.debug();
})