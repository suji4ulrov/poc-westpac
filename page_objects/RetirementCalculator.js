import {
    Selector, 
    t
} from 'testcafe';

class RetirementCalculator {
    constructor(){
        /*Selectors to navigate to RetirementCalculator*/
        this.kiwiSaverLink = Selector('#ubermenu-section-link-kiwisaver-ps').withExactText('KiwiSaver');
        this.calculatorsLink = Selector('#ubermenu-item-cta-kiwisaver-calculators-ps').withExactText('KiwiSaver calculators');
        this.clickHereLink = Selector('.btn').withExactText('Click here to get started.');
        
        /*Selectors to validate Information Icon*/
        this.iFrame = Selector("#calculator-embed > iframe")
        this.icon = Selector('.label').withExactText('View help for this field').parent().find('button');
        this.msg = Selector('[label="Current age"] p')

        /*Selectors for projected balances at retirement*/
        this.currentAgeTextbox = Selector('[model="ctrl.data.CurrentAge"] input')
        
        //Employee options
        this.employeeDropDown = Selector('[ng-model="ctrl.data.EmploymentStatus"] .control-well')
        this.employeeOptionEmployed = Selector('[ng-model="ctrl.data.EmploymentStatus"] .dropdown .label>span').withText('Employed')
        this.employeeOptionSelfEmployed = Selector('[ng-model="ctrl.data.EmploymentStatus"] .dropdown .label>span').withText('Self-employed')
        this.employeeOptionNotEmployed = Selector('[ng-model="ctrl.data.EmploymentStatus"] .dropdown .label>span').withText('Not employed')

        //Input boxes
        this.salaryInput = Selector('[label="Salary or wages per year (before tax)"] input')
        this.currentKiwiSaverBalanceInput = Selector('[label="Current KiwiSaver balance"] input')
        this.voluntaryContributionsInput = Selector('[label="Voluntary contributions"] input')
        this.savingsGoalAtRetirementInput = Selector('[label="Savings goal at retirement"] input')
        
        //Frequency options
        this.frequencyDropDown  = Selector('[ng-model="$parent.period"] .control-well')
        this.frequencyOptionFortnightly = Selector('[ng-model="$parent.period"] .dropdown .label>span').withText('Fortnightly')
        this.frequencyOptionAnnually = Selector('[ng-model="$parent.period"] .dropdown .label>span').withText('Annually')

        //PIR percentage options
        this.pirDropDown = Selector('[ng-model="ctrl.data.PIRRate"] .control-well')
        this.pirOption17 = Selector('[ng-model="ctrl.data.PIRRate"] .dropdown .label>span').withText('17.5%')
        this.pirOption10 = Selector('[ng-model="ctrl.data.PIRRate"] .dropdown .label>span').withText('10.5%')
        
        //Risk Profile Options
        this.riskProfileHigh = Selector('[label="Risk profile"] .input-label').withText('High')
        this.riskProfileMedium = Selector('[label="Risk profile"] .input-label').withText('Medium')

        this.kiwisaverRate4 = Selector('.control-group .input-label').withText('4%')
        this.projection = Selector('[ng-show="ctrl.data.formCompleted"]')
        this.projectionText = Selector('.result-title')
        this.projectionValue = Selector('.result-value')

    }
    async navigateToRetirementCalculator(){
        await t
        .wait(1000)
        .hover(this.kiwiSaverLink)
        .click(this.calculatorsLink)
        .click(this.clickHereLink)
        .wait(1000)
        .switchToIframe(this.iFrame)
    }

    async validateInformationIcon(){
        await t
        .click(this.icon)
        .expect(this.msg.withText('This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver.').exists).ok()
        .wait(1000)
    }
    
    async projectedBalancesAtRetirementScenario1(){
        await t
        .wait(1000)
        .typeText(this.currentAgeTextbox,'30')
        .click(this.employeeDropDown)
        .click(this.employeeOptionEmployed)
        .typeText(this.salaryInput , '82000')
        .click(this.kiwisaverRate4)
        .click(this.pirDropDown)
        .click(this.pirOption17)
        .click(this.riskProfileHigh)
        .click(this.projection)
        .expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok().expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok()
        .expect(this.projectionValue.withText('313,971').exists).ok()
        .wait(1000)
    }

    async projectedBalancesAtRetirementScenario2(){
        await t
        .wait(1000)
        .typeText(this.currentAgeTextbox,'45')
        .click(this.employeeDropDown)
        .click(this.employeeOptionSelfEmployed)
        .click(this.pirDropDown)
        .click(this.pirOption10)
        .typeText(this.currentKiwiSaverBalanceInput,'100000')
        .typeText(this.voluntaryContributionsInput,'90')
        .click(this.frequencyDropDown)
        .click(this.frequencyOptionFortnightly)
        .typeText(this.savingsGoalAtRetirementInput,'290000 ')
        .click(this.riskProfileMedium)
        .click(this.projection)
        .expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok().expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok()
        .expect(this.projectionValue.withText('230,481').exists).ok()
        .wait(1000)
    }

    async projectedBalancesAtRetirementScenario3(){
        await t
        .wait(1000)
        .typeText(this.currentAgeTextbox,'55')
        .click(this.employeeDropDown)
        .click(this.employeeOptionNotEmployed)
        .click(this.pirDropDown)
        .click(this.pirOption10)
        .typeText(this.currentKiwiSaverBalanceInput,'140000')
        .typeText(this.voluntaryContributionsInput,'10')
        .click(this.frequencyDropDown)
        .click(this.frequencyOptionAnnually)
        .click(this.riskProfileMedium)
        .typeText(this.savingsGoalAtRetirementInput,'200000')
        .click(this.projection)
        .expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok().expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok()
        .expect(this.projectionValue.withText('176,557').exists).ok()
        .wait(1000)
    }
    
}

export default new RetirementCalculator();