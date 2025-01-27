import { test, expect } from "@playwright/test";

test("Login test", async ({ page }) => {

  // Verify the page title and text on the page

  await page.goto("https://demoqa.com/login");
  await expect(page).toHaveTitle("DEMOQA");
  await expect(page.locator("h2")).toHaveText("Welcome,");
  await expect(page.locator("h5")).toHaveText("Login in Book Store");
  await expect(page.locator("label#userName-label")).toHaveText("UserName : ");
  await expect(page.locator("input#userName")).toHaveAttribute(
    "placeholder",
    "UserName"
  );
  await expect(page.locator("input#password")).toHaveAttribute(
    "placeholder",
    "Password"
  );
  await expect(page.locator("label#password-label")).toHaveText("Password : ");
  await expect(page.locator("button#login")).toHaveText("Login");
  await expect(page.locator("button#newUser")).toHaveText("New User");

  // Click on the Login button and verify the error feedback (red line arround textboxes and background image)

  await page.locator("button#login").click();
  await expect(page.locator("input#userName")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#userName")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );

  // Fill in the username and click on login and verify the error feedback (red line arround only the password textbox)

  await page.locator("input#userName").fill("test");
  await page.locator("button#login").click();
  await expect(page.locator("input#userName")).not.toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );

  // Fill in the password and click on login and verify the error feedback (red line disappears from the password textbox and it's displayed an error message)

  await page.locator("input#password").fill("test");
  await page.locator("button#login").click();
  await expect(page.locator("input#userName")).not.toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#password")).not.toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("p#name")).toHaveText(
    "Invalid username or password!"
  );
  await expect(page.locator("p#name")).toHaveCSS("color", "rgb(255, 0, 0)");

  // Click on New User and verify the text on the page

  await page.locator("button#newUser").click();

  await expect(page.locator("h4")).toHaveText("Register to Book Store");
  await expect(page.locator("label#firstname-label")).toHaveText(
    "First Name : "
  );
  await expect(page.locator("input#firstname")).toHaveAttribute(
    "placeholder",
    "First Name"
  );
  await expect(page.locator("label#lastname-label")).toHaveText("Last Name : ");
  await expect(page.locator("input#lastname")).toHaveAttribute(
    "placeholder",
    "Last Name"
  );
  await expect(page.locator("label#userName-label")).toHaveText("UserName : ");
  await expect(page.locator("input#userName")).toHaveAttribute(
    "placeholder",
    "UserName"
  );
  await expect(page.locator("label#password-label")).toHaveText("Password : ");
  await expect(page.locator("input#password")).toHaveAttribute(
    "placeholder",
    "Password"
  );
  await expect(page.locator("button#register")).toHaveText("Register");
  await expect(page.locator("button#gotologin")).toHaveText("Back to Login");

  // Click on the Register button and verify the error feedback (red line arround textboxes and background image)

  await page.locator("button#register").click();

  await expect(page.locator("input#firstname")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#firstname")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#lastname")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#lastname")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#userName")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#userName")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );

  // Fill in the first name and click on the Register button and verify the error feedback (red line arround textboxes and background image)

  await page.locator("input#firstname").fill("test");
  await page.locator("button#register").click();
  await expect(page.locator("input#firstname")).not.toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#firstname")).not.toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );

  await expect(page.locator("input#lastname")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#lastname")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#userName")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#userName")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "border-color",
    "rgb(220, 53, 69)"
  );
  await expect(page.locator("input#password")).toHaveCSS(
    "background-image",
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
  );

  // Fill all the fields and click on Register button

  await page.locator("input#lastname").fill("test");
  await page.locator("input#userName").fill("test");
  await page.locator("input#password").fill("test");
  await page.locator("button#register").click(); 

  await expect(page.locator("p#name")).toHaveText(
    "Please verify reCaptcha to register!"
  );


await page.waitForSelector('iframe[title="reCAPTCHA"]');
const recaptchaFrame = page.frameLocator('iframe[title="reCAPTCHA"]');
const recaptchaAnchor = recaptchaFrame.locator('#recaptcha-anchor');
await recaptchaAnchor.waitFor({ timeout: 10000 });
await recaptchaAnchor.click();

// Estou a ter problemas a lidar com o recaptcha, não consigo


  await expect (page.locator("#name")).toHaveText("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");

  // Click on recaptcha and verify the recaptcha error is not displayed

  await page
    .locator(".rc-anchor-center-item.rc-anchor-checkbox-holder")
    .click();
  await expect(page.locator("p#name")).not.toHaveText(
    "Please verify reCaptcha to register!"
  );
});
