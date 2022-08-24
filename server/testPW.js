if (process.env.METEOR_PROMISE) {
  if (process.env.METEOR_PROMISE_FIBERS) {
    Promise.Fiber = require("fibers");
  }
  require("meteor-promise").makeCompatible(Promise);
}

const playwright = require("playwright");

async function testPW() {
  const browser = await playwright.chromium.launch();
  console.log(await browser.version());
  const page = await browser.newPage();

  // emitted when the page crashes
  page.on("error", (err) => {
    console.warn("The page has crashed.", err);
  });

  console.error("going to page");
  await page.goto("https://www.google.com/");

  console.error("page goto done");
  if (!global.Meteor) process.exit();
}

testPW();
