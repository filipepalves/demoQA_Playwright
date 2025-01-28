import { test, expect } from "@playwright/test";

test("Accordian test", async ({ page }) => {

  // Verify the page title and text on the page

  await page.goto("https://demoqa.com/accordian");
  await expect(page).toHaveTitle("DEMOQA");
  await expect(page.locator("h1")).toHaveText("Accordian");
  await expect(page.locator("div[id*='section1Heading']")).toHaveText("What is Lorem Ipsum?");
  await page.locator("div[id*='section1Content']").isVisible();
  await expect(page.locator("div[id*='section2Heading']")).toHaveText("Where does it come from?");
  await expect(page.locator("div[id*='section2Content']")).not.toBeVisible(); 
  await expect(page.locator("div[id*='section3Heading']")).toHaveText("Why do we use it?");
  await expect (page.locator("div[id*='section3Content']")).not.toBeVisible();

  // Click on the first accordian and verify if the content is collapsed

  await page.locator("div[id*='section1Heading']").click();
  await expect(page.locator("div[id*='section1Content']")).not.toBeVisible();

  // Click on the second accordian and verify if the content is expanded

  await page.locator("div[id*='section2Heading']").click();
  await expect(page.locator("div[id*='section2Content']")).toBeVisible();

  // Click on the third accordian and verify if the content is expanded

  await page.locator("div[id*='section3Heading']").click();
  await expect(page.locator("div[id*='section3Content']")).toBeVisible();
  
});
