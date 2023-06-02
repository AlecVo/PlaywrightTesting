import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Go buy smthng', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/');

    //click one of the categories
    await page.getByText('Monitors').click()
    

    //click one of the monitors
    await page.getByText('Apple monitor 24').click()
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=10')

    //click on add to cart
    await page.getByText('Add to cart').click()

    //navigate to cart
    await page.locator('#cartur').click()

    //check if it navigates to the cart
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')

    //place an order
    await page.locator('.btn.btn-success').click()

    //fill in form

    await page.locator('#name').fill('Alec Van Oosterwijck')

    await expect(page.locator('#name')).toContainText('Alec Van Oosterwijck');

    await page.locator('#country').fill('België')
    await page.locator('#city').fill('Lier')
    await page.locator('#card').fill('0536189293847')
    await page.locator('#month').fill('October')
    await page.locator('#year').fill('2050')

    await page.getByText('Purchase').click()
    await page.getByText('OK').click()
    await page.getByText('x').click()

})