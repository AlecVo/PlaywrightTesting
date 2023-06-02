import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://t4t-uat-identity4-server.azurewebsites.net/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dt4t-myportal-admin%26redirect_uri%3Dhttps%253A%252F%252Ft4t-myportal-admin-uat.azurewebsites.net%26response_type%3Dcode%26scope%3Dopenid%2520email%2520roles%2520offline_access%2520profile%2520t4t-myportal-admin%26nonce%3Da1d4b8d633a8e3414f255488b8bf09dcd0QgQvJc2%26state%3Db78d8c6e1568772b369ecb659bdc9e6558VUeoccm%26code_challenge%3D7G_UgOxgkxhsE8CcOGSvV7NdzSlQiEDZ5pVvpHMuwyA%26code_challenge_method%3DS256%26audience%3Dt4t-myportal-api');
  await page.getByText('Sign in with username').click();
  await page.getByPlaceholder('Username').fill('talent2testemployee');
  await page.getByPlaceholder('Password').fill('Test1234!');
  await page.getByRole("button", {name:"Login"}).click();
});

test('Adding employees', async ({ page }) => {

  //navigation to employee
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Employees").first().click()
  await page.getByText("Add employee").click()

  //Personal info
  await page.getByLabel('Last Name').fill('Van Oosterwijck')
  await page.getByLabel('First Name').fill('Alec')
  await page.getByLabel('birthdate').fill('11/10/2002')

  //opening the dropdown and selecting an item
  await page.getByLabel('Nationality').click()
  await page.getByText('Australian').click()

  //opening the dropdown and selecting an item
  await page.getByLabel('Gender').click()
  await page.getByText('Man', { exact: true }).click()
  
  await page.getByLabel('Title').fill('Software Quality Engineer')
  await page.getByLabel('Extra info').fill('niets')

  //Contact Info
  await page.getByLabel('Cellphone').fill('0475445566')
  await page.getByLabel('Home phone').fill('0475778899')
  await page.getByLabel('Work phone').fill('0475112233')

  //geen idee waarom er een ster bij moet?
  await page.getByLabel('Email *').fill('email@mail.com')
  await page.getByLabel('Work email').fill('workemail@mail.com')

  //Adress
  await page.getByLabel('Street and number').fill('Smidstraat')
  await page.getByLabel('Zipcode').fill('2590')
  await page.getByLabel('City').fill('Berlaar')
  await page.getByLabel('Province/Region').fill('Antwerpen')

  //Socials
  await page.getByLabel('Microsoft Email').fill('microsoftemail@mail.com')
  await page.getByLabel('Twitter account').fill('twitter')
  await page.getByLabel('Linkedin account').fill('linkedin')

  //Work
  await page.getByLabel("Type").click()
  await page.getByText('Field Staff').click()

  await page.getByLabel("Tenant").click()
  await page.getByText("Harvey Nash Brussel").click()

  await page.getByLabel("Date In Service").fill("1/5/2023")

  //button add employee
  // await page.getByRole('button', {name:'Save employee'}).click()
  });

test('Adding a contract', async ({page}) => {
  //navigation to contract page
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Contracts").first().click()
  await page.getByText("Add Contract").click()

  //General info
  await page.getByLabel("Job Title").type('Software quality engineer')
  await page.getByLabel("Job Description").type('Testing software or hardware')
  await page.getByLabel("Standard hours per day").fill("23")
  await page.getByLabel("Start Date").type("1/5/2023")
  await page.getByLabel("End Date").type("1/6/2023")

  //Rates
  await page.getByLabel("In Rate").type("5")
  await page.getByLabel("Out Rate").type("10")
  // await page.getByRole('radio', { name: 'Hourly Standard' }).check()
  // await page.getByRole('checkbox', { name: 'Daily Standard' }).check()

  //Tenant
  // await page.locator('#mat-radio-14').click()

  //Employee
  // await page.getByRole("combobox", {name:"Employee"}).click()
  await page.getByLabel("Employee").click()
  await page.getByText("Aaron De Coster").click()

  //Account Manager
  await page.getByLabel("Account manager").click()
  await page.getByText("Igor Jemuce").click()

  //client info
  await page.getByLabel("Clientname").fill("kLant 3")
  await page.getByLabel("Contact Person").fill("Ibrahim")
  await page.getByLabel('Signer *', { exact: true }).fill("waarom tester chrome")
  await page.getByLabel("Email Signer").fill("Waarom is dit al ingevuld?")
  await page.getByLabel("Street").fill("dreikoningenstraat")
  await page.getByLabel("Number *", { exact: true }).fill("14")
  await page.getByLabel("Zipcode").fill("2550")
  await page.getByLabel("City").fill('Antwerpen')
  await page.getByLabel("Country").click()
  await page.getByText("Albania - ALB").click()

  //button add Contract
  // await page.getByRole('button', {name:'Save Contract'}).click()
});
