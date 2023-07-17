package StepDefenitions.Client;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.LocalDate;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

public class TimesheetSteps {


    WebDriver driver;
    @Given(": I am on the Create timesheet page")
    public void i_am_on_the_create_timesheet_page() {

        //navigation
        $$(".sidebar-menu--item-text").findBy(text("timesheets")).click();

        //klik op text Create one now
        $(By.xpath("//div/a[contains(text(),'Create one now →')]")).click();

        //Klikt op de eerste ok knop die verschijnt
        $(By.xpath("//div[@class='modal-footer']/button[@class='btn btn-primary'][1]")).click();


    }
    @When(": I fill in the form correctly")
    public void i_fill_in_the_form_correctly() {

    }
    @When(": I press save")
    public void i_press_save() {
        driver.close();
    }
    @Then(": I made a new timesheet")
    public void i_made_a_new_timesheet() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
