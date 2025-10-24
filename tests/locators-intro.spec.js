//const {} = require("@playwright/test");

import {test} from "@playwright/test";

test ("", async ({page}) => {

    //test code goes here
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@id='APjFqb']"); // xpath for the search box
    //let searchBox = page.locator("textarea#gLFyf[aria-label='Search']");// CSS selector for the search box

    //await searchBox.type("Hello, World!"); / writes the characters 1 by 1 at a time
    await searchBox.fill("Hello, World!"); // fill method writes the entire text in one go
    await page.waitForTimeout(3000);

    searchBox.press("Enter"); // press method simulates pressing Enter key

    await page.waitForTimeout(3000);



});

/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id"
 autofocus="" title="Search" value="" aria-label="Search" placeholder="" 
 aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" 
 autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" 
 maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" 
 data-ved="0ahUKEwidwdT-pdiPAxWKTTABHQElAekQ39UDCCE"></textarea>
*/

//textarea [@class='gLFyf']