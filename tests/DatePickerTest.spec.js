import { test, expect } from "@playwright/test";
import exp from "constants";
import moment from "moment";

test("Date Picker test", async ({ page }) => {
  
  // Verify the page title and text on the page

  await page.goto("https://demoqa.com/date-picker");
  await expect(page).toHaveTitle("DEMOQA");
  await expect(page.locator("h1")).toHaveText("Date Picker");
  await page.getByText("Select Date").isVisible();
  await page.getByText("Date And Time").isVisible();

  // Verify if the Date and the Date and time are with today's date and time

  const datePickerDate = await page
    .locator("#datePickerMonthYearInput")
    .inputValue();
  const expectedDatePickerDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  expect(datePickerDate).toBe(expectedDatePickerDate);

  const dateTimePickerDate = await page
    .locator("#dateAndTimePickerInput")
    .inputValue();
  const expectedDateTimePickerDate = new Date()
    .toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(" at ", " ");
  expect(dateTimePickerDate).toBe(expectedDateTimePickerDate);

  // Click on Date picker,select a date (07-06-1987)

  await page.locator("#datePickerMonthYearInput").click();
  await page.locator(".react-datepicker").isVisible();
  await page.locator(".react-datepicker__year-select").selectOption("1987");
  await page.locator(".react-datepicker__month-select").selectOption("June");
  await page
    .locator(".react-datepicker__day")
    .filter({ hasText: "7" })
    .nth(0)
    .click();

  // Close the date picker and verify if the date is selected

  await page.locator("body").click();
  const updatedDatePickerDate = await page
    .locator("#datePickerMonthYearInput")
    .inputValue();
  const expectedUpdatedDatePickerDate = "06/07/1987";
  expect(updatedDatePickerDate).toBe(expectedUpdatedDatePickerDate);

  // Click on Date and Time picker,select a date and time (07-06-1987 09:30 AM)

  await page.locator("#dateAndTimePickerInput").click();
  await page.locator(".react-datepicker").isVisible();
  await page.locator(".react-datepicker__year-dropdown-container").click();

  let found = false;
  while (!found) {
    const yearElement = await page.locator(`div:text("1987")`);
    found = (await yearElement.count()) > 0;

    if (!found) {
      await page
        .locator(".react-datepicker__navigation--years-previous")
        .click();
    }
  }
  await page.locator(`div:text("1987")`).click();

  await page.locator(".react-datepicker__month-dropdown-container").click();
  await page
    .locator('.react-datepicker__month-option:has-text("June")')
    .click();
  await page.locator(".react-datepicker__day--007").click();
  const timeElement = await page.locator(
    '.react-datepicker__time-list-item:has-text("09:30")'
  );
  await timeElement.scrollIntoViewIfNeeded();
  await timeElement.click();
  // Close the date picker and verify if the date and time is selected

  await page.locator("body").click();
  const updatedDateTimePickerDate = await page
    .locator("#dateAndTimePickerInput")
    .inputValue();
  const expectedUpdatedDateTimePickerDate = "June 7, 1987 9:30 AM";
  expect(updatedDateTimePickerDate).toBe(expectedUpdatedDateTimePickerDate);

});
