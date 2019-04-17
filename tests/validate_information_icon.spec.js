import * as config from '../config'
import { Selector } from 'testcafe';
import {clientFunction} from 'testcafe';
import rc from '../page_objects/RetirementCalculator';
const BASE_URL = config.getBaseUrl();

fixture('Validate information Icon')
  //.page('https://www.westpac.co.nz');
  //console.log("Base URL: "+BASE_URL)
  .page`${BASE_URL}`
  .beforeEach(async t=>{
      await t
      .maximizeWindow()
  })
  

test('Validate information Icon', async (t) => {
    await rc.navigateToRetirementCalculator();


//   const repo = Selector('.repo-list > li > div');
//   // search github
//   await t
//     .typeText('form[action="/search"]', 'testcafe-example user:mjhea0')
//     .pressKey('enter');
//   // check li for results
//   await t
//     .expect(repo.innerText).contains('mjhea0/testcafe-example');
});