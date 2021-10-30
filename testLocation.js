const {Builder, By, Key, WebDriver} = require('selenium-webdriver');

(async function testing2() {
    let driver = await new Builder().forBrowser('chrome').build();
    var location = 'Sydney Domestic Airport 2020';
    const sleep = m => new Promise(r => setTimeout(r, m));
    


    try {

        await driver.get('https://www.service.nsw.gov.au/service-centre');
        await driver.findElement(By.id("locatorTextSearch")).sendKeys(location, Key.ENTER);
        await sleep(1000);
        

        console.log('Testing berhasil !');
        
    }
    catch(err){
        console.log('Testing gagal..'+err);
    }
    finally {
        await driver.quit();
        console.log('Testing Selesai');
    }
})();
