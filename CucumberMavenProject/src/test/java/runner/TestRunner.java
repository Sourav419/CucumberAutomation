package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(
	features="src/test/java/feature",
    glue="stepDefination",
    tags="@Unit",
    plugin = {"pretty" ,"html:AmazonProductSearchReport_HTML",
    		  "json:AmazonProductSearchReport_JSON/cucumber.json", 
    		  "junit:AmazonProductSearchReport_JUNIT/cucumber.xml"}
)

public class TestRunner extends AbstractTestNGCucumberTests
{
	
}