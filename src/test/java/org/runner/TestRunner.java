package org.runner;

import org.helper.Jvm;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features", glue = "org.stepDefition", 
dryRun = false, tags = "~@smoke", monochrome = true,plugin ={"junit:target/Reports/JunitRepot/demoQa.xml","html:target/Reports/HtmlReport/demoQa",
		"json:target/Reports/JsonReport/demoQa.json"})
public class TestRunner {
	
	@AfterClass
	public static void tc() {
System.out.println("before");
		Jvm.generatedJvmReport("target/Reports/JsonReport/demoQa.json");
		System.out.println("after");
	}

}
