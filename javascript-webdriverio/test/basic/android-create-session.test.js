const webdriverio = require('webdriverio');
const androidOptions = require('../../helpers/caps').androidOptions;
const app = require('../../helpers/apps').androidApiDemos;
const assert = require('chai').assert;

androidOptions.capabilities.app = app;

describe('Create Android session', function () {
  let client;

  before(async function () {
    //client = await webdriverio.remote(androidOptions);
  });

  xit('should click the start button', async function () {
    //const element = await client.findElementByAccessibilityId('start');
    //await client.elementClick(element.ELEMENT);

    //assert.equal(await client.getAlertText(), 'Cool title\nthis alert is so cool.');
  });


  xit('should create and destroy a session', async function () {
    //const res = await client.status();
    //assert.isObject(res.build);

    //const current_package = await client.getCurrentPackage();
    //assert.equal(current_package, 'com.dormzi');

    //const delete_session = await client.deleteSession();
    //assert.isNull(delete_session);
  });
});
