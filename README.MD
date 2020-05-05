# WebdriverIO-mocha-jest-allure

###Environment Setup
1. Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with choco
    ```
    $ choco install node
    ```    

2. Project Depencies
    ```
    npm install
    ```

###Execution
* Test in Parallel
    ```
    npx wdio wdio.conf.js
    ```

###Reports
```
allure generate --clean allure-results
allure open
```