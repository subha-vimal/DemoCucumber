package org.helper;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Form extends BaseClass {

	public Form() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@id='first-name']")
	private WebElement firstName;

	@FindBy(xpath = "//input[@id='last-name']")
	private WebElement lastName;

	@FindBy(xpath = "//input[@id='email']")
	private WebElement email;

	@FindBy(xpath = "//input[@id='mobile']")
	private WebElement mobileNo;

	@FindBy(xpath = "//select[@id='country']")
	private WebElement country;

	@FindBy(xpath = "//input[@id='city']")
	private WebElement city;

	@FindBy(xpath = "//textarea[@id='message']")
	private WebElement messages;

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getMobileNo() {
		return mobileNo;
	}

	public WebElement getCountry() {
		return country;
	}

	public WebElement getCity() {
		return city;
	}

	public WebElement getMessages() {
		return messages;
	}
}
