describe ('Google search test', () => {

    it('first test', async () => {

        browser.url('https://google.com')
        await  $('[name="q"]').setValue('WebdriverIO')
       await (await $('[name="btnK"]')).click
        //browser.keys('Enter')
        console.log('typed Webdriver io on seach bar')
        browser.pause(5000)
  
    })
})