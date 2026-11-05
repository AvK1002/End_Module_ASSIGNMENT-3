# Module 3 – Playwright Automation Assignment

## End-to-End Browser Automation Using Playwright and JavaScript

## 1. Project Overview

This project contains two end-to-end browser automation test scenarios developed using **Playwright Test and JavaScript** as part of the Module 3 End Assignment.

The objective is to automate real-world application workflows, validate application behaviour, handle browser interactions, and verify successful completion using Playwright assertions.

The project covers:

- Online grocery order placement.
- Bank manager customer management.
- Form submission and validation.
- Dropdown selection and checkbox handling.
- Browser alert handling.
- Dynamic test data generation.
- Table search, validation, and deletion.
- Playwright assertions and test execution.

## 2. Technologies Used

- **Programming Language:** JavaScript
- **Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **Browser:** Chromium
- **Code Editor:** Visual Studio Code
- **Version Control:** Git and GitHub

## 3. Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm (Node Package Manager)
- Visual Studio Code
- Git
- Playwright

## 4. Project Setup and Installation

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

### Step 2: Install Dependencies

```bash
npm install
```

If Playwright Test is not already installed:

```bash
npm install -D @playwright/test
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install chromium
```

## 5. Project Structure

```text
Module3-Playwright-Assignment/
│
├── tests/
│   ├── broccoliOrder.spec.js
│   └── bankManager.spec.js
│
├── evidence/
│   └── Test_Execution.png
│
├── playwright-report/
│
├── test-results/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── FAILURE_ANALYSIS.md
```

## 6. Test Scenarios

### Q1: Online Grocery Order Placement and Validation

**Application:** [Selenium Practice – Grocery Application](https://rahulshettyacademy.com/seleniumPractise/#/)

**Test File:** `broccoliOrder.spec.js`

**Objective:**

To automate the complete order-placement workflow by purchasing Broccoli from the online grocery application and verifying the final order confirmation message.

**Test Execution Workflow:**

1. Navigate to the Selenium Practice application.
2. Locate the Broccoli product.
3. Click the associated ADD TO CART button.
4. Open the shopping cart.
5. Verify that the selected product is displayed in the cart.
6. Click PROCEED TO CHECKOUT.
7. Click Place Order.
8. Select India from the country dropdown.
9. Accept the terms and conditions checkbox.
10. Click Proceed to submit the order.
11. Verify that the order confirmation message is displayed.
12. Print the confirmation message in the execution console.

**Assertions and Validation:**

- Verify that the Broccoli product is visible.
- Verify that the selected product appears in the shopping cart.
- Verify that the final confirmation message contains:

`Thank you, your order has been placed successfully`

- Print the confirmation message using `console.log()`.

**Expected Result:**

The Broccoli order is successfully placed, and the application displays the expected order confirmation message.

#### Q1 – Execution Evidence

**Console Output**

<img width="1237" height="897" alt="image" src="https://github.com/user-attachments/assets/f1b8d8c3-d14b-4e14-86d6-73967f121734" />


---

### Q2: Bank Manager – Add Customer, Open Account, Search and Delete

**Application:** [GlobalSQA Banking Application](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login)

**Test File:** `bankManager.spec.js`

**Objective:**

To automate customer management operations in the GlobalSQA Banking Application, including customer creation, bank account opening, customer search, and deletion.

**Test Data:**

| Field | Value |
|---|---|
| First Name | John |
| Last Name | Dynamically generated unique name |
| Post Code | 682001 |
| Currency | Dollar |

**Test Execution Workflow:**

**1. Bank Manager Login**

- Navigate to the GlobalSQA Banking Application.
- Click Bank Manager Login.
- Verify that the manager dashboard is displayed.

**2. Add Customer**

- Navigate to Add Customer.
- Enter the first name as John.
- Enter a unique last name.
- Enter the postcode 682001.
- Submit the customer details.
- Handle the browser alert.
- Print the alert message in the console.

**3. Open Bank Account**

- Navigate to Open Account.
- Select the newly created customer.
- Select Dollar as the currency.
- Click Process.
- Handle the account creation browser alert.
- Print the alert message in the console.

**4. Search and Validate Customer**

- Navigate to Customers.
- Search using the unique last name.
- Verify that exactly one matching customer record is displayed.
- Retrieve and print the customer details in the console.

**5. Delete Customer**

- Click the Delete button associated with the matching customer.
- Verify that no matching customer record remains.
- Print the deletion confirmation message in the console.

**Assertions and Validation:**

- Verify successful access to the manager dashboard.
- Verify the customer creation alert.
- Verify the account creation alert.
- Verify that the newly created customer is available for account selection.
- Verify that exactly one matching customer record is displayed.
- Verify that the customer record is no longer displayed after deletion.

**Expected Result:**

The customer is successfully created, a Dollar account is opened, the customer is located through the search functionality, and the customer record is deleted successfully.

#### Q2 – Execution Evidence

**Console Output**

<img width="1037" height="847" alt="image" src="https://github.com/user-attachments/assets/d1f2ef84-817c-4019-8d55-ef64a06ee8cc" />


---

## 7. Test Execution

The test cases can be executed individually or together using Playwright Test.

### Execute Q1 – Grocery Order Placement

```bash
npx playwright test tests/broccoliOrder.spec.js --headed
```

### Execute Q2 – Bank Manager Automation

```bash
npx playwright test tests/bankManager.spec.js --headed
```

### Execute Both Test Cases

```bash
npx playwright test --headed
```

### Execute in Headless Mode

```bash
npx playwright test
```

### Generate and View HTML Test Report

After test execution, use:

```bash
npx playwright show-report
```

The HTML report provides details about test execution, including passed and failed tests.

## 8. Test Execution Results

The following section records the final execution results.

| Test Scenario | Expected Result | Execution Status |
|---|---|---|
| Q1 – Grocery Order Placement | Order confirmation displayed | Passed |
| Q2 – Bank Manager Automation | Customer created, account opened, searched and deleted | Passed |

**Note:** Update the execution status based on the final test run and retain the corresponding execution evidence.

### Test Execution Screenshot

<!-- Insert screenshot showing Playwright test results here -->

---

## 9. Failure Analysis

A separate failure analysis report is maintained in:

`FAILURE_ANALYSIS.md`

The report documents an automation failure encountered during development, its root cause, debugging steps, correction, and final validation.

---

## 10. Key Playwright Concepts Demonstrated

This project demonstrates the practical implementation of the following Playwright concepts:

- Browser navigation using `page.goto()`.
- Locators using CSS selectors and Playwright's role-based locators.
- Element interaction using `click()` and `fill()`.
- Dropdown selection using `selectOption()`.
- Checkbox interaction using `check()`.
- Browser alert handling using the `dialog` event.
- Assertions using Playwright's `expect()`.
- Web-first assertions such as `toBeVisible()`, `toContainText()`, and `toHaveCount()`.
- Dynamic test data generation using JavaScript `Date.now()`.
- Retrieving element content using `innerText()`.
- Console output using `console.log()`.
- Synchronization through Playwright auto-waiting and web-first assertions.

## 11. Conclusion

This assignment provided practical experience in developing end-to-end browser automation tests using Playwright and JavaScript.

Both test scenarios demonstrate the automation of complete application workflows, including navigation, product selection, form submission, dropdowns, checkboxes, browser alerts, search operations, deletion, and result validation.

The project demonstrates the application of Playwright automation concepts in real-world e-commerce and banking application scenarios.

---

**Project:** Module 3 – Playwright Automation Assignment  
**Framework:** Playwright Test  
**Language:** JavaScript  
**Browser:** Chromium
