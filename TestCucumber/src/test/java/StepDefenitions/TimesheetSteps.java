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
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.WebDriverConditions.url;

public class TimesheetSteps {
    WebDriver driver;
    @Given(": I am on the Create timesheet page")
    public void i_am_on_the_create_timesheet_page() {
        //navigation
        $$(".sidebar-menu--item-text").findBy(text("timesheets")).click();

        //Create Proberen beter te schrijven
        $(By.xpath("//*[@id=\"content\"]/div/div/div/div[1]/div[2]/div[1]/div/div[2]/a")).click();
        $(By.xpath("//*[@id=\"selectContractsList\"]/div/div/div[3]/button[2]")).click();



    }
    @When(": I fill in the form correctly")
    public void i_fill_in_the_form_correctly() {
        if ($(By.className("month-header")).getValue() == "July 2023") {
            $(By.xpath("/html/body/div/div[3]/div/div/div/div/div/div/div[1]/div/div[2]/table/tbody/tr[1]/td[2]/select")).click();
            $(By.linkText("Daily standard")).click();
        } else {
            driver.quit();
        }
    }
    @When(": I press save")
    public void i_press_save() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then(": I made a new timesheet")
    public void i_made_a_new_timesheet() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
