
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Draw shows choices', async () =>{
    const choices = await driver.findElement(By.id('choices'))
    await driver.findElement(By.id('draw')).click()
    const shown = await choices.isDisplayed()
    expect(shown).toBe(true)
    await driver.sleep(2000)
})

test('Removes bot from Duo', async () => {
    await driver.findElement(By.id('draw')).click()
    const robots = await driver.findElement(By.id('player-duo'))
    await driver.findElement(By.id('addbot')).click()
    await driver.findElement(By.id('botback')).click()
    // const choices = await driver.findElement(By.id('choices'))
    expect(robots).toBeUndefined()
    await driver.sleep(2000)
})