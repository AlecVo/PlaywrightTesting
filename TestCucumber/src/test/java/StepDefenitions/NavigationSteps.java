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
public class NavigationSteps {
    WebDriver driver;
    @Before
    public void Login(){

        driver = new ChromeDriver();

        open("https://t4t-myportal-uat.azurewebsites.net/");
        $(By.linkText("Sign in with username")).click();
        $(By.id("Username")).setValue("Talent2TestEmployee");
        $(By.id("Password")).setValue("Test1234!");
        $(By.name("button")).click();
    }
    @Given(": I am on the homepage")
    public void i_am_on_the_homepage() {
        webdriver().shouldHave(url("https://t4t-myportal-uat.azurewebsites.net/"));
    }
    @When(": I click on a navigation {string}")
    public void i_click_on_a_navigation(String string) {

        $$(".sidebar-menu--item-text").findBy(text(string)).click();
    }
    @Then(": I will be navigated to that {string}")
    public void i_will_be_navigated_to_that(String string) {
        var link = "https://t4t-myportal-uat.azurewebsites.net/";
        link = link + string;
        webdriver().shouldHave(url(link));
        driver.quit();
    }
    @After
    public void logout(){
        $(By.cssSelector(".dropdown-toggle")).click();
        $(By.cssSelector(".pe-7s-power")).click();
    }

}
