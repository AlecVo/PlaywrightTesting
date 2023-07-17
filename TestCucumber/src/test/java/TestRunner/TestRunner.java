package TestRunner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features/Client/Login.feature",
        "src/test/resources/features/Client/Navigation.feature",
        "src/test/resources/features/Client/Timesheet.feature",
        "src/test/resources/features/Client/CareerTracks.feature",
        "src/test/resources/features/News.feature"}
        ,glue = {"org.example.stepDefinitions"})
public class TestRunner {
}
