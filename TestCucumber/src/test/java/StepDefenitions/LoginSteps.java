package StepDefenitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class LoginSteps {
    WebDriver driver;

    @Given("User launches the chrome browser")
    public void user_launches_the_chrome_browser() {
        driver = new ChromeDriver();
        driver.get("https://www.google.com");
        driver.findElement(By.xpath("//[@title='search']")).click();
        System.out.println("Test");
        driver.close();
        driver.quit();
    }
    @When("He opens the login page")
    public void he_opens_the_login_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("He fills in the {string} and {string}")
    public void he_fills_in_the_and(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("He presses login")
    public void he_presses_login() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("close browser")
    public void close_browser() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
