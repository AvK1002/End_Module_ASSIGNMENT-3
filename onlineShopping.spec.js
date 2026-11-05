const { test, expect } = require('@playwright/test');

test('Place Broccoli Order Successfully', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const broccoliProduct = page.locator('.product').filter({ hasText: 'Brocolli - 1 Kg' });
    await expect(broccoliProduct).toBeVisible();
    await broccoliProduct.getByRole('button', {name: 'ADD TO CART'}).click();
    await page.locator('.cart-icon').click();
    await expect(page.locator('.cart-preview')).toContainText('Brocolli - 1 Kg');
    await page.getByText('PROCEED TO CHECKOUT').click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.locator('select').selectOption({ label: 'India' });
    await page.locator('.chkAgree').check();
    await page.getByRole('button', { name: 'Proceed' }).click();

    const confirmationMessage = page.locator('.wrapperTwo');
    await expect(confirmationMessage).toContainText(
        'Thank you, your order has been placed successfully'
    );

    const message = await confirmationMessage.innerText();
    console.log('Order Confirmation:', message);
    await page.waitForTimeout(2000); // Wait for 2 seconds to observe the confirmation message
});
