const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');



module.exports = (on, config) => {
    on('task', {
        'logInSSO'(options = {}) {
            return puppeteer.launch({headless: false,ignoreSSL: true ,ignoreHTTPSErrors: true,args: [ '--enable-features=NetworkService', '--ignore-certificate-errors','--start-fullscreen', '--window-size=1920,1080','--no-sandbox'],defaultViewport:null}).then(async (browser) => {
              const email = 'nipuni.gunatilake@rakuten.com';
              const username = 'nipuni.gunatilake'
              const password = 'Gamaya1982#'
      
          
                const page = await browser.newPage();
                await page.goto('https://stg-platform.ai.rakuten-it.com/auth/login');
               // await page.goto('https://admin-ui-dev-3000-esd-aiplatform.dev-zed2-jpe2.dev.jp.local/auth/login');
              //await page.goto('https://platform.ai.rakuten-it.com/auth/login');
                await page.waitForSelector('button[data-testid="btn-rakuten-login"]');
                await page.click('button[data-testid="btn-rakuten-login"]');
                await page.waitForSelector('input[name=loginfmt]');
                await page.click('input[name=loginfmt]');
                await page.type('input[name=loginfmt]', email, { delay: 10 });
                await page.waitForSelector('input[type=submit]');
                await page.click('input[type=submit]');
                await page.waitForSelector('input[id="okta-signin-username"]');
                await page.click('input[id="okta-signin-username"]');
                await page.type('input[id="okta-signin-username"]',username);
                await page.waitForSelector('input[id="okta-signin-password"]');
                await page.click('input[id="okta-signin-password"]');
                await page.type('input[id="okta-signin-password"]',password);
                await page.click('input[type=submit]');
                await page.waitForSelector("#idSIButton9");
                await page.click("#idSIButton9");
                await page.waitFor(10000)
                await page.waitForSelector('[class="component layout dashboard"]', { visible: true });
                await page.waitForSelector('[class="nav-link"]',{ visible: true });
                await page.click('[class="nav-link"]');
                await page.waitFor(10000)
                await page.waitForSelector('[class="icon lnr lnr-user"]')
                await page.click('[class="icon lnr lnr-user"]')
                await page.waitForSelector('[class="component menu-item"]')
                await page.click('[class="component menu-item"]')
                await page.waitFor(20000)
                await page.waitForSelector('[class="btn btn-primary add"]')
                await page.click('[class="btn btn-primary add"]')
                await page.waitForSelector('input[name="name"]')
                await page.type('input[name="name"]',"TestTeam",{delay: 100})
                await page.waitForSelector('input[name="email"]')
                await page.type('input[name="email"]',"nipuni.gunatilake@rakuten.com",{delay: 100})
                await page.waitForSelector('button[class="btn btn-primary"]')
                await page.click('button[class="btn btn-primary"]')
                await page.waitFor(5000)
                await page.waitForSelector('input[name="payment.profile.name"]')
                await page.type('input[name="payment.profile.name"]',"test",{delay: 100})
                await page.waitForSelector('textarea[name="payment.profile.address"]')
                await page.type('textarea[name="payment.profile.address"]',"test",{delay: 100})
                await page.waitForSelector('button[class="btn btn-primary"]')
                const example = await page.$$('button[class="btn btn-primary"]');
                await example[1].click();
                await page.waitForSelector('label[class="payment-method d-flex justify-content-left"]')
                await page.click('label[class="payment-method d-flex justify-content-left"]');
                await page.waitForSelector('input[name="payment.primary.code.profit"]')
                await page.type('input[name="payment.primary.code.profit"]',"11111",{delay: 100})
                await page.waitForSelector('input[name="payment.primary.code.service"]')
                await page.type('input[name="payment.primary.code.service"]',"111111",{delay: 100})
                await page.waitForSelector('button[class="btn idle btn-primary"]')
                await page.click('button[class="btn idle btn-primary"]');
                await page.waitFor(5000)
                await page.waitForSelector('button[class="btn btn-outline-light btn-sm"]')
                await page.click('button[class="btn btn-outline-light btn-sm"]')
                await page.waitFor(2000)
                await page.waitForSelector('button[class="btn btn-danger"]')
                await page.click('button[class="btn btn-danger"]')
                await page.waitFor(5000)
                await page.waitForSelector('input[class="form-control clean"]')
                await page.waitFor(2000)
                await page.type('input[class="form-control clean"]',"TestTeam")
              
                await page.waitForSelector('button[class="btn btn-primary"]')
               await page.click('button[class="btn btn-primary"]')
            
                      
      
           browser.close();
      
              
           
         }) }
          });}
      
      
   
  