import { test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    
    //await page.waitForTimeout(2000);

    let actualTitle = await page.title();
    console.log(actualTitle);

});

test("Getting the current url of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    
    let actualUrl = page.url();
    console.log(actualUrl);

});

test("Set the size of the window", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(2000);
    
    //page.setViewportSize({ width: 1366, height: 768 });

   // await page.waitForTimeout(2000);

});