import { expect as expectChai } from 'chai'
describe ('Amazon Home Page test', async() =>{

    it('should be able to launch amazone home page', async()=>{
        await browser.url('https://www.amazon.in')
         const title = await browser.getTitle()
         console.log(title)
         await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
         await expect(browser).toHaveUrl("https://www.amazon.in/")  // mocha assertion
         expectChai(await browser.getUrl()).to.include('.amazon')
    })
})