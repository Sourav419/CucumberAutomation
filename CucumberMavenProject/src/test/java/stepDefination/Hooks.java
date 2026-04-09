package stepDefination;

import org.openqa.selenium.WebDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks 
{
	 public static WebDriver driver;
  @Before
  public void setUp()
  {
	  System.out.println("Amazon Website is Under testing");						
  }
  
  @After
  public void tearDown()
  {
	  System.out.println("Testing Complete");	
  }
  }

