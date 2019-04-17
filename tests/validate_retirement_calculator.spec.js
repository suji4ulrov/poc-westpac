import * as config from '../config'
import rc from '../page_objects/RetirementCalculator';

//Base url for tests entry point reading from config file
const BASE_URL = config.getBaseUrl();
fixture('Validate information Icon')
  .page`${BASE_URL}`
  .beforeEach(async t=>{
      await t
      .maximizeWindow()
  })

 /*Test User Story 1:  Scnario1: 
 Given User Clicks information icon besides Current age the message 
 “This calculator has an age limit of 64 years old as you need to be under 
 the age of 65 to join KiwiSaver.” is displayed below the current age field.*/ 
test('Validate information Icon', async (t) => {
    await rc.navigateToRetirementCalculator();
    await rc.validateInformationIcon();
});

/*Test User Story 2:  Scnario 1:
•	User whose Current age is 30 is Employed @ a Salary 82000p/a and contributes to 
KiwiSaver @ 4% has a PIR 17.5% and chooses a high risk profile is able to calculate 
his projected balances at retirement. */
test('Projected balances at retirement', async (t) => {
  await rc.navigateToRetirementCalculator();
  await rc.projectedBalancesAtRetirementScenario1();
});

/*Test User Story 2:  Scnario 2:
•	User whose current aged 45 is Self-employed, has a PIR 10.5%, current KiwiSaver 
balance is $100000, voluntary contributes $90 fortnightly and chooses medium risk profile
with saving goals requirement of $290000 is able to calculate his projected balances at retirement. */
test('Projected balances at retirement', async (t) => {
  await rc.navigateToRetirementCalculator();
  await rc.projectedBalancesAtRetirementScenario2();
});

/*Test User Story 2:  Scnario 3:
•	User whose current aged 55 is not employed, has a PIR 10.5%, current KiwiSaver balance is $140000, 
voluntary contributes $10 annually and chooses medium risk profile with saving goals requirement of $200000
is able to calculate his projected balances at retirement. */
test('Projected balances at retirement', async (t) => {
  await rc.navigateToRetirementCalculator();
  await rc.projectedBalancesAtRetirementScenario3();
});