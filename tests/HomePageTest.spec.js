import { test, expect } from "@playwright/test";

test("Home Page test", async ({ page }) => {
  
  const url = "https://demoqa.com/";
  await page.goto(url);

  console.log("Starting Home page Test");

  // Verify all the buttons

  const elementsClick =
    '.card.mt-4.top-card:nth-of-type(1)';
  const elementsText = await page.innerText(elementsClick);
  expect(elementsText).toBe("Elements");

  const formsClick =
    '.card.mt-4.top-card:nth-of-type(2)';
  const formsText = await page.innerText(formsClick);
  expect(formsText).toBe("Forms");

  const alertsClick =
    '.card.mt-4.top-card:nth-of-type(3)';
  const alertsText = await page.innerText(alertsClick);
  expect(alertsText).toBe("Alerts, Frame & Windows");

  const widgetsClick =
    '.card.mt-4.top-card:nth-of-type(4)';
  const widgetsText = await page.innerText(widgetsClick);
  expect(widgetsText).toBe("Widgets");

  const interactionsClick =
    '.card.mt-4.top-card:nth-of-type(5)';
  const interactionsText = await page.innerText(interactionsClick);
  expect(interactionsText).toBe("Interactions");

  const bookStoreClick =
    '.card.mt-4.top-card:nth-of-type(6)';
  const bookStoreText = await page.innerText(bookStoreClick);
  expect(bookStoreText).toBe("Book Store Application");

  console.log("All the labels are verified.");

  // Click on each button
  await page.click(elementsClick);
  await page.goBack();

  await page.click(formsClick);
  await page.goBack();

  await page.click(alertsClick);
  await page.goBack();

  await page.click(widgetsClick);
  await page.goBack();

  await page.click(interactionsClick);
  await page.goBack();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.click(bookStoreClick);

  console.log("All the buttons are working as expected.");
  console.log("Finishing Home page Test.");
});
