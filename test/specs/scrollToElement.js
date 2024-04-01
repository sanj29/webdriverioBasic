import { browser } from '@wdio/globals'

describe('Scroll to WebElement and Click on Eleement in webdriver io', async () =>{


    it('Test Scroll to WebElement  ', async() => {

        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
        await browser.maximizeWindow()
        let elementToScroll = await $('#menu-miscellaneous > li:nth-child(1) > a > span:nth-child(2)')
        // select ByAttibute
        
        await elementToScroll.scrollIntoView()
        await browser.pause(5000)
        await elementToScroll.click()
        await browser.pause(5000)

        expect(await browser).toHaveUrlContaining('alertbox')
    })

})