import { expect } from 'chai'
import Computer from 'src/Computer'
import { Builder, By, ThenableWebDriver } from 'selenium-webdriver'
import 'chromedriver'
import { Options } from 'selenium-webdriver/chrome'

describe('Computer', () => {

  let browser: ThenableWebDriver

  before(async () => {
    browser = new Builder().
      forBrowser('chrome').
      setChromeOptions(new Options().headless()).
      build()
  });

  it('should know the answer', () => {
    const computer = new Computer()
    expect(computer.answer).equals(42)
  })

  // see: https://github.com/goenning/typescript-selenium-example
  // and: https://stackoverflow.com/a/62702647/2925434
  it('should Google', async function () {
    this.timeout(10000)
    await browser.navigate().to('https://www.google.com')
    const title = await browser.getTitle()
    expect(title).contains("Google")
  })

  it('should know the page title', async function() {
    const path = __filename.slice(0, __filename.indexOf('/tests'))
    await browser.navigate().to(`file:///${path}/index.html`)
    const title = await browser.getTitle()
    expect(title).contains("This is the new page title!")
  })

  it('should set THE PAGE TITLE', async function() {
    const path = __filename.slice(0, __filename.indexOf('/tests'))
    await browser.navigate().to(`file:///${path}/index.html`)
    await browser.findElement(By.id('theInput')).sendKeys('buenos dias')
    await browser.findElement(By.id('theButton')).click()
    const title = await browser.getTitle()
    expect(title).contains("BUENOS DIAS")
  })

  after(async () => {
    await browser.close()
  });

})