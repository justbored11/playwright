// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { time } = require("console");
const { chromium } = require("playwright");
const { expect } = require("playwright/test");




async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");
  
 const rows =await page.locator('.athing + tr > td.subtext span.age');


 console.log("rows" , await rows.count())

 const timeElements = await rows.all()

 for(const rowElement of timeElements){
  const timeStr = await timeElements[0].getAttribute('title')
  console.log('time is ' , time)

  const date = Date.parse(timeStr)

  console.log('date ', date)


 }




//  console.log(await timeElements[0].getAttribute('title'))




 

}

(async () => {
  await sortHackerNewsArticles();
})();




