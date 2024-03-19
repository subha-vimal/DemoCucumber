package org.stepDefition;

import org.helper.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void browserTearUP() {
		browserLaunch();
	}

	@After
	public void browserTearDown() {
		//quitBrowser();
	}
}
