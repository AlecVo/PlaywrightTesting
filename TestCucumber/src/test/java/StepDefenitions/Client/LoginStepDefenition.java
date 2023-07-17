package StepDefenitions.Client;

import com.codeborne.selenide.selector.ByText;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeAll;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.WebDriverConditions.url;

public class LoginStepDefenition {
    WebDriver driver;
    //Dependency Injection
    @FindBy(id = "Password")
    public WebElement PasswordInput;
    @FindBy(id = "Username")
    public WebElement UsernameInput;
    @Given("I enter the login page")
    public void i_enter_the_login_page() {
        //Navigate to the Login page
        open("https://t4t-myportal-uat.azurewebsites.net/");
    }
    @When("I enter valid {string} and {string}")
    public void i_enter_valid_and(String string, String string2) {

        $(By.linkText("Sign in with username")).click();

        // dit is het zelfde als $(By.id("Password")).SetValue(string2);
        UsernameInput.sendKeys(string);
        PasswordInput.sendKeys(string2);

    }
    @Then("I am logged in")
    public void i_am_logged_in() {
        $(By.name("button")).click();
        //validation for the unhappy case
        webdriver().shouldHave(url("https://t4t-myportal-admin-uat.azurewebsites.net/#/dashboard"));
    }
}
