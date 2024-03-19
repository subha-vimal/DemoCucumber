package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Admin\\eclipse-workspace\\DemoQaCucumber\\src\\test\\resources\\Features", glue = "org.stepDefition", 
dryRun = false, tags = "~@smoke", monochrome = true,plugin ={"junit:C:\\Users\\Admin\\eclipse-workspace\\DemoQaCucumber\\target\\Reports\\demoQa.xml","html:C:\\Users\\Admin\\eclipse-workspace\\DemoQaCucumber\\target\\Reports\\demoQa","json:C:\\Users\\Admin\\eclipse-workspace\\DemoQaCucumber\\target\\Reports\\demoQa.json"})
public class TestRunner {

}
