const webdriverio = require('webdriverio');
const iosOptions = require('../../helpers/caps').iosOptions;
const app = require('../../helpers/apps').iosTestApp;
const assert = require('chai').assert;
const shortid = require('shortid');

iosOptions.capabilities.app = app;

describe('Basic IOS interactions', function () {
  let client;

  beforeEach(async function () {
    client = await webdriverio.remote(iosOptions);
    client.setImplicitTimeout(30000)
  });

  afterEach(async function () {
    await client.deleteSession();
  });

  it('Should be able to register as a Dormzi', async function () {
    const startLink = await client.findElement('accessibility id', 'start');
    await client.elementClick(startLink.ELEMENT);

    const onboardingEmailLink = await client.findElement('accessibility id', 'onBoardingEmail');
    await client.elementClick(onboardingEmailLink.ELEMENT);

    const onboardingDormer = await client.findElement('accessibility id', 'onBoardingDormzi');
    await client.elementClick(onboardingDormer.ELEMENT);

    const emailInput = await client.findElement('accessibility id', 'typeEmailAddress');
    client.elementSendKeys(emailInput.ELEMENT,  "sam+" + shortid.generate() + "@dormzi.com\n");

    const passwordInput = await client.findElement('accessibility id', 'typePassword');
    client.elementSendKeys(passwordInput.ELEMENT,  "password\n");

    await client.findElement('accessibility id', 'typeToken').then((tokenInput) => {
      assert.isNotNull(tokenInput.ELEMENT);
    });
  });


  it('Should be able to register as a Dormer', async function () {
    const startLink = await client.findElement('accessibility id', 'start');
    await client.elementClick(startLink.ELEMENT);

    const onboardingEmailLink = await client.findElement('accessibility id', 'onBoardingEmail');
    await client.elementClick(onboardingEmailLink.ELEMENT);

    const onboardingDormer = await client.findElement('accessibility id', 'onBoardingDormer');
    await client.elementClick(onboardingDormer.ELEMENT);

    const emailInput = await client.findElement('accessibility id', 'typeEmailAddress');
    client.elementSendKeys(emailInput.ELEMENT,  "sam+" + shortid.generate() + "@dormzi.com\n");

    const passwordInput = await client.findElement('accessibility id', 'typePassword');
    client.elementSendKeys(passwordInput.ELEMENT,  "password\n");

    await client.findElement('accessibility id', 'typeToken').then((tokenInput) => {
      assert.isNotNull(tokenInput.ELEMENT);
    });
  });
});
