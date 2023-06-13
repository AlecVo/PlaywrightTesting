import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://t4t-uat-identity4-server.azurewebsites.net/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dt4t-myportal-admin%26redirect_uri%3Dhttps%253A%252F%252Ft4t-myportal-admin-uat.azurewebsites.net%26response_type%3Dcode%26scope%3Dopenid%2520email%2520roles%2520offline_access%2520profile%2520t4t-myportal-admin%26nonce%3Da1d4b8d633a8e3414f255488b8bf09dcd0QgQvJc2%26state%3Db78d8c6e1568772b369ecb659bdc9e6558VUeoccm%26code_challenge%3D7G_UgOxgkxhsE8CcOGSvV7NdzSlQiEDZ5pVvpHMuwyA%26code_challenge_method%3DS256%26audience%3Dt4t-myportal-api');
  await page.getByText('Sign in with username').click();
  await page.getByPlaceholder('Username').fill('talent2testemployee');
  await page.getByPlaceholder('Password').fill('Test1234!');
  await page.getByRole("button", {name:"Login"}).click();
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Settings").first().click()
});

test('Changing Asset Category', async ({page}) =>{
    //Navigation
    await page.getByRole('row', { name: '1 Treinabonnementen TA Edit asset category' }).getByRole('button', { name: 'Edit asset category' }).click()
    
    //Filling in form
    await page.getByLabel("Name *").type("Trein")
    await page.getByLabel("Technical code").type("Somethng")
    await page.getByText('globe').click();// this needs to be changed, it needs to have the same name as the name in the input field.
    await page.getByRole('option', { name: 'bell' }).click();
    await page.getByText('Yes').click();// check the radio button
    await page.getByText('Prijs').fill("500")
    
    
})