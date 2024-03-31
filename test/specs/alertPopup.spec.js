import { expect } from "chai"

describe("Test for Alert/Pop", async()=> {

    it('Test alert for redifmail', async() =>{
        browser.url("https://mail.rediff.com/cgi-bin/login.cgi")
        
        let title =await browser.getTitle()
        console.log(title)
        await $('#login1').setValue('qaautomation@redifmail.com')
        //await browser.debug()
        await $('[value="Sign in"]').click()
        // assert alert is present or not
        expect(await browser.isAlertOpen()).to.equal(true)
        let alertMsg= await browser.getAlertText()

        // ass
        expect(await browser.getAlertText()).to.equal("Please enter your password")
        
        await browser.acceptAlert()
        await browser.pause(5000)
    })
}) 