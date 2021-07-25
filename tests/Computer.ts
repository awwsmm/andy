import { expect } from 'chai'
import Computer from 'src/Computer'
import { Builder, ThenableWebDriver } from 'selenium-webdriver'
import 'chromedriver'

describe('Computer', () => {

  let browser: ThenableWebDriver

  before(async () => {
    browser = new Builder().forBrowser('chrome').build()
  });

  it('should know the answer', () => {
    const computer = new Computer()
    expect(computer.answer).equals(42)
  })

  it('should Google', async function () {
    this.timeout(10000)
    await browser.navigate().to('https://www.google.com')
    const title = await browser.getTitle()
    expect(title).contains("Google")
  })

  after(async () => {
    await browser.close()
  });

})