# webdriverioBasic


# To initialize project: 
```npm init wdio```

# To run specific test: 
```npx wdio run ./wdio.conf.js  --spec ./test/specs/googlesearch.spec.js```

# Compile and create Allure report: 
- https://webdriver.io/docs/allure-reporter/
```1. Add dependency:  npm install @wdio/allure-reporter --save-dev
2. Add reportet configuration in wdio.conf.js
	reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]]
3. Install allure CLI tool--> npm install -g allure-commandline --save-dev
4. allure generate ./allure-results/

5. allure open ```

# Running all test in wdio
 ``` npx wdio run wdio.conf.js ``` 

 # Running single test in wdio
 ``` npx wdio run wdio.conf.js --spec test/specs/checkbox.js ```


