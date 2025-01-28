import { test, expect } from "@playwright/test";

test("Auto Complete test", async ({ page }) => {

  // Verify the page title and text on the page

  await page.goto("https://demoqa.com/auto-complete");
  await expect(page).toHaveTitle("DEMOQA");
  await expect(page.locator("h1")).toHaveText("Auto Complete");
  await expect(page.locator("#autoCompleteMultiple")).toHaveText("Type multiple color names");
  await expect(page.locator("#autoCompleteSingle")).toHaveText("Type single color name");

  // Fill the Multiple textbox and type "re" and verify the color names

  await page.locator("div#autoCompleteMultipleContainer").click();
  await page.locator("div#autoCompleteMultipleContainer").pressSequentially("re");
  await expect(page.locator(".auto-complete__option").first()).toBeVisible();
  const colorNames = await page.locator(".auto-complete__option").allInnerTexts();
  expect(colorNames).toEqual(["Red", "Green"]);

  // Click on both the color names and verify the selected color names

  await page.locator(".auto-complete__option").first().click();
  await page.locator("div#autoCompleteMultipleContainer").click();
  await page.locator("div#autoCompleteMultipleContainer").pressSequentially("re");
  await expect(page.locator(".auto-complete__option").first()).toBeVisible();
  const updatedColorNames = await page.locator(".auto-complete__option").allInnerTexts();
  expect(updatedColorNames).toEqual(["Green"]);
  await page.locator(".auto-complete__option").first().click();
  const colorNamesSelected = await page.locator(".auto-complete__multi-value").allInnerTexts();
  expect(colorNamesSelected).toEqual(["Red", "Green"]);


});