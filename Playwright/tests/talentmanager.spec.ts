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
  await page.getByRole('button', {name:'Save employee'}).click()
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
  await page.locator('#mat-radio-6').getByText('Hourly Standard').click()
  await page.getByText("Shift Hour Weekend").scrollIntoViewIfNeeded()
  await page.getByText("Shift Hour Weekend").click()

  //Tenant
  await page.getByText("Team4Talent").click()

  //Employee
  // await page.getByRole("combobox", {name:"Employee"}).click()
  await page.getByLabel("Employee").click()
  await page.getByText("Aaron Sprangers").click()

  //Account Manager
  await page.getByLabel("Account manager").click()
  await page.getByRole('option', { name: 'Aaron Sprangers' }).getByText('Aaron Sprangers').click()

  //client info
  await page.getByLabel("Clientname").fill("kLant 3")
  await page.getByLabel("Contact Person").fill("Ibrahim")
  await page.getByLabel("Street").fill("dreikoningenstraat")
  await page.getByLabel("Number *", { exact: true }).fill("14")
  await page.getByLabel("Zipcode").fill("2550")
  await page.getByLabel("City").fill('Antwerpen')
  await page.getByLabel("Country").click()
  await page.getByText("Albania - ALB").click()

  //button add Contract
  await page.getByRole('button', {name:'Save Contract'}).click()
});

test('Adding a project', async ({page}) =>{
  //navigation to project page
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Projects").first().click()
  await page.getByText("Add Project").click()

  //filling in form
  await page.getByLabel("Project name").fill("Project Phoenix")
  await page.getByRole('combobox', { name: 'Tenant' }).click()
  await page.getByText("iets", { exact: true }).click()
  await page.mouse.click(15,50)

  await page.getByLabel("Start Date").type("11/10/2005")
  await page.getByLabel("End Date").type("11/10/20019")

  //button add Project
  await page.getByText("Save").click()

})

test('Adding a Login', async ({page}) =>{
    //navigation to Logins page
    await page.getByText("Login").click()
    await page.getByText("menu").first().click()
    await page.getByText("Logins").first().click()
    await page.getByText("Add Login").click()

    //General info
    await page.getByLabel('Last name').type("Van Oosterwijck")
    await page.getByLabel('First name').type("Alec")
    await page.getByLabel('Email').type("email@mail.com")
    //Dropdown click
    await page.getByLabel('Type').click()
    await page.getByText("Freelancer").click()
    //Dropdown click
    await page.getByLabel('Tenant').click()
    await page.getByText('Talent2Test', { exact: true }).click()
    //Dropdown click
    await page.getByLabel('Employee').click()
    await page.getByText('Alexander De Prest').click()

    //Hier heb ik nog problemen bij het selecteren van een checkbox, isChecked werkt maar dan is het niet gechecked
    //await page.locator('#myPortalUser-input').click()

    //button add Login
    //await page.getByText(" Save Login ").click()

})
test('Adding a tenant', async ({page}) =>{
    //navigation to Tenant
    await page.getByText("Login").click()
    await page.getByText("menu").first().click()
    await page.getByText("Tenants").first().click()
    await page.getByText("Add Tenant").click()

    //Tenant Details
    await page.getByLabel("Tenant name").type("Is iets anders")
    await page.getByLabel("Tenant short name").type("IIA")
    await page.getByLabel("Tenant accent color").type("#fb8500")

    //open dropdown
    await page.getByLabel("Signer").click()
    await page.getByText("Ann Wuyts").scrollIntoViewIfNeeded()
    await page.getByText("Ann Wuyts").click() // een dropdown moet sommige namen nog inladen dus moet ik ook een scrolldown gebruiken in dropdown om de onderste te selecteren

    await page.getByLabel("Street").type("ZwaluwStraat")
    await page.getByLabel("House number").type("7")
    await page.getByLabel("Zipcode").type("2590")
    await page.getByLabel("City").type("Berlaar")

    //open dropdown
    await page.getByLabel("Country").click()
    await page.getByText("Albania - ALB").click()

    //button add tenant
    //await page.getByRole('button', { name: 'Save' }).click()
})
test('Adding a Carreer Track', async ({page}) =>{
      //navigation to Tenant
    await page.getByText("Login").click()
    await page.getByText("menu").first().click()
    await page.getByText("Career tracks").first().click()
    await page.getByText("Add career track").click()

    //filling in form
    await page.getByLabel("Career track name").type("Unit")

    //opening dropdown
    await page.getByRole('combobox', { name: 'Tenant' }).click()
    await page.getByText("Harvey Nash Brussel").click()
    

    //button add tenant
    //await page.getByRole('button', { name: 'Save' }).click()
})
test('Adding a document', async ({page}) =>{
      //navigation to Document
      await page.getByText("Login").click()
      await page.getByText("menu").first().click()
      await page.getByText("Documents").first().click()
      await page.getByText("Add Document").click()

      //filling in form
      await page.getByLabel("Document name").type("A document")
      await page.getByLabel("Uploaded on").type("5/10/2023")

      //opening dropdown
      await page.getByRole('combobox', { name: 'Tenant' }).click()
      await page.getByText("Harvey Nash Brussel").click()
      await page.mouse.click(15,50)

      //clicking on checkbox by pressing text
      await page.locator('#mat-slide-toggle-1').getByText('Published').click()

      //button add tenant
      await page.getByRole('button', { name: 'Save' }).click()
})
test('Adding a news item', async ({page}) =>{
  //navigation to news
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("News").first().click()
  await page.getByText("Add News").click()

  //filling in form
  await page.getByLabel("Title").type("Testing news item")

  //opening dropdown
  await page.getByRole('combobox', { name: 'Tenant' }).click()
  await page.getByText("Harvey Nash Brussel").click()
  //dit zorgt ervoor dat men de checkbox deselect op een simpele manier
  await page.mouse.click(15,50)

  //opening dropdown
  await page.getByRole('combobox', { name: 'User Types' }).click()
  await page.getByText("Freelancer").click()
  await page.mouse.click(15,50)

  await page.getByText("Enter text here...").click()
  await page.getByText("Enter text here...").type("Dit is het aller nieuwste news item")

  //button add news
  await page.getByRole('button', { name: 'Save' }).click()
})
//Settings page
test('Adding a Asset Category', async ({page}) =>{
  //navigation to Asset Category
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Settings").first().click()
  await page.getByText("Add asset category").click()

  //filling in form
  await page.getByLabel("Name").type("New category")
  await page.getByLabel("Technical code").type("111011101110")

  //opening dropdown
  await page.getByRole('combobox', { name: 'Icon' }).click()
  await page.getByText("star").click()

  await page.getByText("No").click()

  //button add asset
  await page.getByRole('button', { name: 'Save & close' }).click()
})
test('Adding a Transaction Types', async ({page}) =>{
  //navigation to Document
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Settings").first().click()
  await page.getByText("Transaction Types").click()
  await page.getByText("Add transaction type").click()

  // filling in form
  await page.getByLabel("Type name").type("A transaction type")

  // button add Transaction type
  //await page.getByRole('button', { name: 'Save & close' }).click()
})
test('Follow Up Contact Types', async ({page}) =>{
  //navigation to Document
  await page.getByText("Login").click()
  await page.getByText("menu").first().click()
  await page.getByText("Settings").first().click()
  await page.getByText("Follow Up Contact Types").click()
  await page.getByText("Add follow up contact type ").click()

  // filling in form
  await page.getByLabel("Name").type("Stage opvolging")
  await page.getByLabel("Accent color").type("#FF9800")

  // button add Transaction type
  await page.getByRole('button', { name: 'Save & close' }).click()
})
