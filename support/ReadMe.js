//Installing Cypress

//Install Cypress via npm:cd /your/project/path

//npm install cypress --save-dev

//Install puppeteer using   npm install puppeteer

//Open Cypress:  ./node_modules/.bin/cypress open. or npx cypress open
//Can run in headless mode: Can run in headless mode in CI server or in your local machine using the project id. You need to put the project id in the cypress.json file.

/*eg:

{
"chromeWebSecurity": false,
"projectId": "cpve1v"
}

project Id will be changed per user.

using this command it will execute in headless mode. key also change according to the user. you need to get it from settings tab in the CypressUI.

eg: ./node_modules/.bin/cypress run --record --key 793f1efd-dab8-40e4-9cc0-d4c085ef9f38  

//comment out the required url in DEV or Staging in Operator_Assistant_Login.js file and run the tests.
eg:
 cy.logInStag={}
    cy.logInStag.logInStag =()=>{
        //cy.visit('https://stg-platform.ai.rakuten-it.com/auth/login');
        cy.visit('https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/auth/login');
    }
*/

//comment out relavent invitations url dev or stag in Operator Assistant_accounts.js file 
/*const url="https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/invitation/"
const url="https://stg-platform.ai.rakuten-it.com/invitation/"*/

//comment out sso login url dev or stag in plugins->index.js file
/*await page.goto('https://stg-platform.ai.rakuten-it.com/auth/login');
//await page.goto('https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/auth/login');*/

//if the Mail slurp API key get expired by any means you need to create a login in https://app.mailslurp.com/login/ and Refresh a API Key 
//and put in Operator_assistant_accounts.js => const mailslurp = new MailSlurp({apiKey:"16b85e5cf6b5bfb03a2583cb067e89f010aa023c2bafddc94a54f0cd438c12b2"})

