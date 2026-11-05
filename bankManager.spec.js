
const { test, expect } = require('@playwright/test');

test('Bank Manager - Add Customer, Open Account, Search and Delete', async ({ page }) => {

    // Test data
    const firstName = 'John';
    const lastName = `Mathew_${Date.now()}`; // Unique last name to avoid conflicts
    const postCode = '682001';
    const customerFullName = `${firstName} ${lastName}`;

    // 1. Open application and Bank Manager Login
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    await page.getByRole('button', { name: 'Bank Manager Login' }).click();

    // Verify Manager Dashboard
    await expect(page.getByRole('button', { name: 'Add Customer' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open Account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Customers' })).toBeVisible();

    console.log('Bank Manager dashboard opened successfully.');

    // 2. Add Customer
    await page.getByRole('button', { name: 'Add Customer' }).click();

    await page.locator('input[ng-model="fName"]').fill(firstName);
    await page.locator('input[ng-model="lName"]').fill(lastName);
    await page.locator('input[ng-model="postCd"]').fill(postCode);

    // 3. Handle Add Customer Alert
page.once('dialog', async dialog => {
    console.log('Add Customer Alert:', dialog.message());
    await dialog.accept();
});

await page.getByRole('button', { name: 'Add Customer' }).last().click();
await page.waitForTimeout(2000); // Wait for 1 second to ensure the alert is handled

    // 4. Open Bank Account
    await page.getByRole('button', { name: 'Open Account' }).click();

    // Select newly created customer
    await page.locator('select[ng-model="custId"]')
        .selectOption({ label: customerFullName });

    // Select Dollar currency
    await page.locator('select[ng-model="currency"]')
        .selectOption({ label: 'Dollar' });

    // Handle Account Creation Alert
 
page.once('dialog', async dialog => {
    console.log('Open Account Alert:', dialog.message());
    await dialog.accept();
});

await page.getByRole('button', { name: 'Process' }).last().click();
    // 5. Search and Validate Customer
    await page.getByRole('button', { name: 'Customers' }).click();

    const searchBox = page.locator('input[ng-model="searchCustomer"]');

    await searchBox.fill(lastName);

    // Find matching customer row
    const customerRows = page.locator('table tbody tr')
        .filter({ hasText: lastName });

    // Verify exactly one customer is displayed
    await expect(customerRows).toHaveCount(1);

    // Print customer details
    const customerDetails = (await customerRows.first().innerText()).trim();

    console.log('Matching Customer Details:\n' + customerDetails);

    // 6. Delete Customer
    await customerRows.first()
        .getByRole('button', { name: 'Delete' })
        .click();

    // Verify customer is deleted
    await expect(customerRows).toHaveCount(0);

    console.log(
        `Deletion confirmed: customer ${customerFullName} is no longer displayed.`
    );

});
