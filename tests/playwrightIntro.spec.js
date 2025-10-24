//const {} = require("@playwright/test");

import {test} from "@playwright/test";

test ("", async ({page}) => {

    //test code goes here
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);

});







