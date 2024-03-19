package org.stepDefition;

import org.helper.BaseClass;
import org.helper.Form;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {

	Form f;

	@Given("User launch the browser and launch url")
	public void user_launch_the_browser_and_launch_url() {
		launchUrl("https://www.toolsqa.com/selenium-training/#enroll-form");
	}

	@When("User enter the first name and last name of the application")
	public void user_enter_the_first_name_and_last_name_of_the_application() {
		f = new Form();
		textBoxValues(f.getFirstName(), "subhashini");
		textBoxValues(f.getLastName(), "Ramesh");
	}

	@Given("User launch the browser and launch web application")
	public void user_launch_the_browser_and_launch_web_application() {
		launchUrl("https://www.toolsqa.com/selenium-training/#enroll-form");
	}

	@When("User enter the first name and last name")
	public void user_enter_the_first_name_and_last_name() {
		f = new Form();
		textBoxValues(f.getFirstName(), "Subhashini");
		textBoxValues(f.getLastName(), "Ramesh");
	}

	@When("User enter the Email and MobileNo")
	public void user_enter_the_Email_and_MobileNo() {
		f = new Form();
		textBoxValues(f.getEmail(), "subhashiniramesh23@gmail.com");
		textBoxValues(f.getMobileNo(), "7502225577");
	}

	@When("User fill the Country and City")
	public void user_fill_the_Country_and_City() {
		f = new Form();
		dropDownByVisibleText(f.getCountry(), "India");
		textBoxValues(f.getCity(), "chennai");
	}

	@Then("User gives the required Messages")
	public void user_gives_the_required_Messages() {
		f = new Form();
		textBoxValues(f.getMessages(), "hii alll ........");
	}

	@When("User have enter the {string} and {string}")
	public void user_have_enter_the_and(String first_Name, String last_Name) {
		f = new Form();
		textBoxValues(f.getFirstName(), first_Name);
		textBoxValues(f.getLastName(), last_Name);
	}

	@When("User have enter {string} and {string}")
	public void user_have_enter_and(String email, String mobileNo) {
		f= new Form();
		textBoxValues(f.getEmail(), email);
		textBoxValues(f.getMobileNo(), mobileNo);
	}

	@When("User fill the {string}")
	public void user_fill_the_and(String city) {
		dropDownByVisibleText(f.getCountry(), "India");
		textBoxValues(f.getCity(), city);
	}

}
