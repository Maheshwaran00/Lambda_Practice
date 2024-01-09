import test, { chromium, expect } from "@playwright/test";


test('Sample test',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.globalsqa.com/');
    await page.locator('text="Tester’s Hub"').nth(0).hover();
    await page.locator('text="Demo Testing Site"').nth(0).hover();
    await page.locator('text="AlertBox"').nth(0).click(); 
    await page.getByText('Try it').nth(0).click();      
})
