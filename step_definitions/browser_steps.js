const { When, Then, setDefaultTimeout } = require('cucumber')
// const { browser } = require('protractor')
const { expect } = require('chai');
// const { browser } = require('protractor');
setDefaultTimeout(60000);

When(/^I open epam.com$/, function() {
return browser.get('https://www.epam.com/')
});

Then(/^EPAM | Software Engineering & Product Development Services$/, async function() {
const pageTitle = await browser.getTitle();
expect(pageTitle).to.be.equal('EPAM | Software Engineering & Product Development Services');
});

When(/^I wait 10 seconds$/, function() {
return browser.sleep(10000);
})