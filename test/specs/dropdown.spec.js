describe('Handling Drop-down in webdriver io', async () =>{


    it('test to selectvalues from dropdonw', async() => {

        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
        let dropDown = await $('.resp-tab-content-active>p>select')
        // select ByAttibute
        
        dropDown.selectByAttribute('value', 'IND')
        await browser.pause(2000)
        // select ByVisibleText()
        dropDown.selectByVisibleText('Armenia')
        await browser.pause(2000)
        // select Byvalue
        dropDown.selectByIndex('3')
        await browser.pause(2000)
    })

})