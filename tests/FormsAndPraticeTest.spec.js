import { test, expect } from "@playwright/test";

test.describe("Forms and Practice Forms Test", () => {
  test("Forms test", async ({ page }) => {
    console.log("Starting Forms Test");

    const url = "https://demoqa.com/";
    await page.goto(url);

    // Click on elements button and verify all the elements

    const elementsClick = ".card.mt-4.top-card:nth-of-type(2)";
    await page.click(elementsClick);

    const title = await page.innerText("div:nth-of-type(2) > .group-header");
    expect(title.trim()).toBe("Forms");

    const pleaseSelect = await page.innerText(".col-12.mt-4.col-md-6");
    expect(pleaseSelect).toBe(
      "Please select an item from left to start practice."
    );

    const practiceButton = page
      .locator("#item-0")
      .filter({ hasText: "Practice Form" });
    await expect(practiceButton).toBeVisible();

    const practiceButtonText = await page.innerText(".show .text");
    expect(practiceButtonText).toBe("Practice Form");

    console.log("All the labels are verified. Ending Forms Test");
  });

  test("Practice Forms test", async ({ page }) => {
    console.log("Starting Practice Form Test");

    await page.goto("https://demoqa.com/forms");

    // Click on Practice form button and verify all the elements
    const textboxClick = ".collapse.element-list.show > .menu-list > li#item-0";
    await page.click(textboxClick);

    const title = await page.innerText(".text-center");
    expect(title).toBe("Practice Form");

    const name = await page.innerText("#userName-label");
    expect(name).toBe("Name");

    const firstname = page.locator("#firstName");
    const firstnameText = await firstname.getAttribute("placeholder");
    expect(firstnameText).toBe("First Name");

    const lastname = page.locator("#lastName");
    const lastnameText = await lastname.getAttribute("placeholder");
    expect(lastnameText).toBe("Last Name");

    const email = await page.innerText("#userEmail-wrapper");
    expect(email).toBe("Email");

    const emailTextbox = page.locator("#userEmail");
    const emailTextboxText = await emailTextbox.getAttribute("placeholder");
    expect(emailTextboxText).toBe("name@example.com");

    const gender = await page.innerText(
      "div#genterWrapper > .col-md-3.col-sm-12"
    );
    expect(gender).toBe("Gender");

    await page.evaluate(() => window.scrollBy(0, 300));

    const genderRadioMale = page.locator("#gender-radio-1");
    const genderRadioMaleText = await genderRadioMale.getAttribute("value");
    expect(genderRadioMaleText).toBe("Male");

    const genderRadioFemale = page.locator("#gender-radio-2");
    const genderRadioFemaleText = await genderRadioFemale.getAttribute("value");
    expect(genderRadioFemaleText).toBe("Female");

    const genderRadioOther = page.locator("#gender-radio-3");
    const genderRadioOtherText = await genderRadioOther.getAttribute("value");
    expect(genderRadioOtherText).toBe("Other");

    const mobile = await page.innerText("#userNumber-label");
    expect(mobile).toBe("Mobile(10 Digits)");

    const mobileTextbox = page.locator("#userNumber");
    const mobileTextboxText = await mobileTextbox.getAttribute("placeholder");
    expect(mobileTextboxText).toBe("Mobile Number");

    const dateOfBirth = await page.innerText("#dateOfBirth-label");
    expect(dateOfBirth).toBe("Date of Birth");

    const dateOfBirthTextbox = page.locator("#dateOfBirthInput");
    const dateOfBirthTextboxText = await page
      .locator("input#dateOfBirthInput")
      .getAttribute("value");
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    expect(dateOfBirthTextboxText).toBe(formattedDate);

    const subject = await page.innerText("#subjectsWrapper #subjects-label");
    expect(subject).toBe("Subjects");

    const subjectTextbox = page.locator("#subjectsContainer");
    await expect(subjectTextbox).toBeVisible();

    const hobbies = await page.innerText(
      "div#hobbiesWrapper label#subjects-label"
    );
    expect(hobbies).toBe("Hobbies");

    const checkboxSports = await page.innerText(
      "div#hobbiesWrapper > .col-md-9.col-sm-12 > div:nth-of-type(1) > label"
    );
    expect(checkboxSports).toBe("Sports");

    const checkboxReading = await page.innerText(
      "div#hobbiesWrapper > .col-md-9.col-sm-12 > div:nth-of-type(2) > label"
    );
    expect(checkboxReading).toBe("Reading");

    const checkboxMusic = await page.innerText(
      "div#hobbiesWrapper > .col-md-9.col-sm-12 > div:nth-of-type(3) > label"
    );
    expect(checkboxMusic).toBe("Music");

    const picture = await page.innerText(
      "div:nth-of-type(8) > .col-md-3.col-sm-12"
    );
    expect(picture).toBe("Picture");

    const selectPicture = await page.innerText(".form-file-label");
    expect(selectPicture).toBe("Select picture");

    const chooseButton = page.locator("#uploadPicture");
    await expect(chooseButton).toBeVisible();

    const currentAddress = await page.innerText("#currentAddress-label");
    expect(currentAddress).toBe("Current Address");

    const currentAddressTextbox = page.locator("#currentAddress");
    const currentAddressTextboxText = await currentAddressTextbox.getAttribute(
      "placeholder"
    );
    expect(currentAddressTextboxText).toBe("Current Address");

    const stateAndCity = await page.innerText("#stateCity-label");
    expect(stateAndCity).toBe("State and City");

    const stateDropdown = await page.innerText(
      ".col-md-4.col-sm-12 > div#state"
    );
    expect(stateDropdown).toBe("Select State");

    const cityDropdown = await page.innerText(".col-md-4.col-sm-12 > div#city");
    expect(cityDropdown).toBe("Select City");

    const submitButton = page.locator("#submit");
    await expect(submitButton).toBeVisible();

    console.log("All the elements are as expected.");

    // Click on submit button and verify all the mandatory fields
    await submitButton.click();

    //await page.waitForTimeout(500);

    const errorMessages = await page
      .locator(
        ".form-control.is-invalid, .was-validated .form-control:invalid, .custom-control-input.is-invalid~.custom-control-label, .was-validated .custom-control-input:invalid~.custom-control-label"
      )
      .count();
    expect(errorMessages).toBe(6);

    // Check border color of error fields

    const errorFields = page.locator(
      ".form-control.is-invalid, .was-validated .form-control:invalid"
    );
    const errorFieldsCount = await errorFields.count();
    expect(errorFieldsCount).toBe(3);

    for (let i = 0; i < errorFields; i++) {
      const borderColor = await errorFields
        .nth(i)
        .evaluate((el) => getComputedStyle(el).borderColor);
      expect(borderColor).toBe("rgb(184, 76, 87)");

      const backgroundImage = await errorFields
        .nth(i)
        .evaluate((el) => getComputedStyle(el).backgroundImage);
      expect(backgroundImage.includes("data:image/svg+xml")).toBe(true);
    }

    console.log(
      "All the mandatory fields are with border line and warning icon after clicked without filling."
    );

    // Give 2 of the mandatory fields and click on submit button and verify if only 4 error messages are displayed
    await page.fill("#firstName", "Filipe");
    await page.fill("#lastName", "Alves");
    await submitButton.click();
    const errorCountAfterPartialFill = await page
      .locator(
        ".form-control.is-invalid, .was-validated .form-control:invalid, .custom-control-input.is-invalid~.custom-control-label, .was-validated .custom-control-input:invalid~.custom-control-label"
      )
      .count();
    expect(errorCountAfterPartialFill).toBe(4);

    // Give all the mandatory fields and click on submit button and verify if no error message is displayed
    await page.fill("#userEmail", "filipealves@qa.com");
    await page.locator('label[for="gender-radio-1"]').click();
    await page.fill("#userNumber", "1234567890");

    // Test the date text box

    await page.locator(".react-datepicker-wrapper").click();
    await page.selectOption(".react-datepicker__year-select", {
      label: "1987",
    });
    await page.selectOption(".react-datepicker__month-select", {
      label: "June",
    });
    const daySelected = page.locator(
      ".react-datepicker__day.react-datepicker__day--007.react-datepicker__day--weekend"
    );
    await daySelected.click();

    const dateOfBirthValue = await dateOfBirthTextbox.inputValue();
    expect(dateOfBirthValue).toBe("07 Jun 1987");

    // Test the checkboxes
    await page.locator('label[for="hobbies-checkbox-1"]').click();
    expect(await page.isChecked("#hobbies-checkbox-1")).toBe(true);

    await page.locator('label[for="hobbies-checkbox-1"]').click();
    expect(await page.isChecked("#hobbies-checkbox-1")).toBe(false);

    await page.locator('label[for="hobbies-checkbox-2"]').click();
    expect(await page.isChecked("#hobbies-checkbox-2")).toBe(true);

    await page.locator('label[for="hobbies-checkbox-2"]').click();
    expect(await page.isChecked("#hobbies-checkbox-2")).toBe(false);

    await page.locator('label[for="hobbies-checkbox-3"]').click();
    expect(await page.isChecked("#hobbies-checkbox-3")).toBe(true);

    await page.locator('label[for="hobbies-checkbox-3"]').click();
    expect(await page.isChecked("#hobbies-checkbox-3")).toBe(false);

    await submitButton.click();
    const finalErrorCount = await page
      .locator(
        ".form-control.is-invalid, .was-validated .form-control:invalid, .custom-control-input.is-invalid~.custom-control-label, .was-validated .custom-control-input:invalid~.custom-control-label"
      )
      .count();
    expect(finalErrorCount).toBe(0);

    console.log(
      "All the mandatory fields are without border line with red color and without warning icon after filled."
    );

    // Confirm all the inputs are corrected added to the form in the submit form confirmation modal

    const submitFormModal = page.locator("#example-modal-sizes-title-lg");
    await expect(submitFormModal).toBeVisible();
    const submitFormModalText = await submitFormModal.innerText();
    expect(submitFormModalText).toBe("Thanks for submitting the form");
    const submitFormModalClose = page.locator("#closeLargeModal");
    await submitFormModalClose.click();

    console.log("Finishing Practice Forms Test.");
  });
});
