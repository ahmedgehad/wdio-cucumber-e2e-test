import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"


Given(/^Google page is opened$/, async function name() {
    // console.log(`------Before the run------`);
    await browser.url("https://www.google.com/")
    await browser.pause(1000)
    // console.log(`------After the run------`);
})

When(/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: ${searchItem}`);
    let ele =$(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search results$/, async function() {
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedUrl) {
    console.log(`>> expectedUrl: ${expectedUrl}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedUrl)
})