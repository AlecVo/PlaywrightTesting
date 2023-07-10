package StepDefenitions;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeAll;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.WebDriverConditions.url;


public class LoginSteps {
    WebDriver driver;

    @Given("User launches the chrome browser")
    public void user_launches_the_chrome_browser() {
        driver = new ChromeDriver();
    }
    @When("He opens the login page")
    public void he_opens_the_login_page() {
        open("https://t4t-myportal-uat.azurewebsites.net/");
    }
    @Then("I enter valid {string} and {string}")
    public void i_enter_valid_and(String string, String string2) {

        $(By.linkText("Sign in with username")).click();
        $(By.id("Username")).setValue(string);
        $(By.id("Password")).setValue(string2);

    }
    @Then("He presses login")
    public void he_presses_login() {
        $(By.name("button")).click();
        //validation for the unhappy case
        webdriver().shouldHave(url("https://t4t-myportal-admin-uat.azurewebsites.net/#/dashboard"));
    }
    @Then("close browser")
    public void close_browser() {
        driver.close();
    }
}
