package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import amazonTesting.pages.HomePage;
import amazonTesting.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import reusableComponents.PropertiesOperation;

public class AmazonLoginTest 
{
	public static WebDriver driver;
	
	@Given("^the user launches the browser$")
	public void the_user_launches_the_browser() throws Throwable 
	{
		System.out.println("The User Launches the Browser.");
		System.setProperty(PropertiesOperation.getPropertyValue("chrome"),PropertiesOperation.getPropertyValue("chromedriver"));
		driver=new ChromeDriver();
				
		driver.manage().window().maximize();
		
	}
	@SuppressWarnings("deprecation")
	@Given("^the user is on the Amazon login page$")
	public void the_user_is_on_the_Amazon_login_page() throws Throwable 
	{
		System.out.println("The User is on Amazon Login Page");
		
		driver.manage().timeouts().implicitlyWait(Integer.parseInt(PropertiesOperation.getPropertyValue("implicitWait")), TimeUnit.SECONDS);
		driver.get(PropertiesOperation.getPropertyValue("url"));
		Thread.sleep(1000);
		driver.findElement(HomePage.btn_signIn).click();
		
	}

	@When("^the user enter valid user name and password$")
	public void the_user_enter_valid_user_name_and_password() throws Throwable 
	{
		System.out.println("The User enter valid userName and Password");
		driver.findElement(LoginPage.txt_userName).sendKeys(PropertiesOperation.getPropertyValue("username"));
		driver.findElement(LoginPage.btn_submit1).click();
		driver.findElement(LoginPage.txt_password).sendKeys(PropertiesOperation.getPropertyValue("username"));
		driver.findElement(LoginPage.btn_submit2).click();
	}
	@When("^the user enter '\"([^\"]*)\"' and '\"([^\"]*)\"'$")
	public void the_user_enter_and(String arg1, String arg2) throws Throwable 
	{

		System.out.println("The User enter valid userName and Password");
		driver.findElement(LoginPage.txt_userName).sendKeys(arg1);
		driver.findElement(LoginPage.btn_submit1).click();
		driver.findElement(LoginPage.txt_password).sendKeys(arg2);
		driver.findElement(LoginPage.btn_submit2).click(); 
	}
	@SuppressWarnings("deprecation")
	@Then("^the user should be able to login to the application$")
	public void the_user_should_be_able_to_login_to_the_application() throws Throwable 
	{
		System.out.println("The User Should be Login to the Application if Username and Password is Correct");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Assert.assertEquals(driver.getTitle(), "Amazon Sign In");
		driver.quit();
	}
}
