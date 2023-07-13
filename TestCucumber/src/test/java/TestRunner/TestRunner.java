package TestRunner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features/Login.feature",
        "src/test/resources/features/Navigation.feature",
"src/test/resources/features/Timesheet.feature"}
        ,glue = {"org.example.stepDefinitions"})
public class TestRunner {
}
