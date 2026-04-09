package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import amazonTesting.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import reusableComponents.PropertiesOperation;

public class AmazonProducSearchingTest 
{
public static WebDriver driver;
    @Given("^the user launches the website$")
    public void the_user_launches_the_website() throws Throwable 
    {
    	System.out.println("The User Launches the Browser.");
		System.setProperty(PropertiesOperation.getPropertyValue("chrome"),PropertiesOperation.getPropertyValue("chromedriver"));
		driver=new ChromeDriver();
				
		driver.manage().window().maximize();
    }
	
	@SuppressWarnings("deprecation")
	@Given("^the user is on Amazon Home Page$")
	public void the_user_is_on_Amazon_Home_Page() throws Throwable 
	{
		driver.get(PropertiesOperation.getPropertyValue("url"));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^the user enter name of the Product$")
	public void the_user_enter_name_of_the_Product() throws Throwable 
	{
		driver.findElement(HomePage.btn_search).sendKeys(PropertiesOperation.getPropertyValue("searchElement"));
		driver.findElement(HomePage.btn_search_submit).click();
	}
	@When("^the user enter '\"([^\"]*)\"'$")
	public void the_user_enter(String arg1) throws Throwable 
	{
		driver.findElement(HomePage.btn_search).sendKeys(arg1);
		driver.findElement(HomePage.btn_search_submit).click();
	}
	@SuppressWarnings("deprecation")
	@Then("^the user should be able to find the Product '\"([^\"]*)\"'$")
	public void the_user_should_be_able_to_find_the_Product(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Assert.assertEquals(driver.getTitle(),"Amazon.in :"+arg1);
		driver.quit();
	}


}
