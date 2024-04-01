import { expect } from "chai"

describe("Test for Radio Buttons", async()=> {

    //this.retries(2);

    before(function () {
        console.log('runs once before the first test in this block')
      });
    
      after(function () {
        console.log(' runs once after the last test in this block')
      });
    
      beforeEach(function () {
        console.log(' runs before each test in this block')
      });
    
      afterEach(function () {
        console.log('runs after each test in this block')
      });

      it('Test for is Selected ', async() =>{
       // this.retries(2); 
        await browser.url('https://materializecss.com/radio-buttons.html')
        await browser.maximizeWindow()

       // await $('*=Radio Group').click()
        let  yellowRadiodBtn = await $('//span[text()="Yellow"]')
        await yellowRadiodBtn.click()
        // isSelected() assestion
        console.log(await yellowRadiodBtn.isSelected())
        expect(await yellowRadiodBtn.isSelected()).to.equal(false) // this is returing fasle, as the element is not in the option/input tag
        browser.pause(5000)    
    })

    it('Test for is Displayed', async() =>{
         let redRadiodBtn = await $('//span[text()="Red"]')
        // isDisplayed
        expect(await redRadiodBtn.isDisplayed()).to.equal(true)
        await redRadiodBtn.click
        browser.pause(5000)
    })

    it('Test for is Clickable', async() =>{
       let greenRadiodBtn = await $('//span[text()="Green"]')
    // isClickable()
    expect(await greenRadiodBtn.isClickable()).to.equal(true)
    await greenRadiodBtn.click()
    browser.pause(5000)
    })
}) 