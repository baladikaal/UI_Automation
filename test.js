const {Builder, By, Key, WebDriver} = require('selenium-webdriver');

(async function testing1() {
    let driver = await new Builder().forBrowser('chrome').build();
    var find = 'Apply for a number plate';

    try {

        // Navigate to Url
        await driver.get('https://www.service.nsw.gov.au/');
        // Enter text "webdriver" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys(find, Key.ENTER);

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
