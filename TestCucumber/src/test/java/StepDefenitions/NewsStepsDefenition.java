package StepDefenitions;
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
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.WebDriverConditions.url;
public class NewsStepsDefenition {

    WebDriver driver;

    @Before
    public void AdminLogin(){
        driver = new ChromeDriver();

        open("https://t4t-myportal-admin-uat.azurewebsites.net/#/dashboard");
        $(By.linkText("Sign in with username")).click();
        $(By.id("Username")).setValue("t4temployee");
        $(By.id("Password")).setValue("Test1234!");
        $(By.name("button")).click();
    }

    @Given("I am on the News Page")
    public void i_am_on_the_news_page() {
        //Click on the news icon
        $(By.xpath("//span/a[contains(text(),\"News\")]")).click();
    }

    @When("I Fill in the form correctly")
    public void i_fill_in_the_form_correctly() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("Press save")
    public void press_save() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("I added a New news item")
    public void i_added_a_new_news_item() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}