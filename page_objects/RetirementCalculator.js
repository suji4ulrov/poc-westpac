import {
    Selector, 
    t
} from 'testcafe';

class RetirementCalculator {
    constructor(){
        this.kiwiSaverLink = Selector('#ubermenu-section-link-kiwisaver-ps').withExactText('KiwiSaver');
        this.calculatorsLink = Selector('#ubermenu-item-cta-kiwisaver-calculators-ps').withExactText('KiwiSaver calculators');
        this.clickHereLink = Selector('.btn').withExactText('Click here to get started.');
        this.testaaa = Selector('h1').withExactText('KiwiSaver Retirement Calculator');
        // this.testa = Selector('.wpnib-field-current-age').child().find('button');
        this.icon = Selector('.label').withExactText('View help for this field').parent().find('button');
        //const x = Selector('a.external-link-control').child().withExactText('Find My Rate');
        this.clickButton = Selector('.field-group-set-framet');
        this.msg = Selector('[label="Current age"] p')
        this.employeeDropDown = Selector('[ng-model="ctrl.data.EmploymentStatus"] .control-well')
        this.employeeOption = Selector('[ng-model="ctrl.data.EmploymentStatus"] .dropdown .label>span').withText('Employed')
        this.Salary = Selector('[label="Salary or wages per year (before tax)"] input')
        this.rate = Selector('.control-group .input-label').withText('4%')
        this.pirDropDown = Selector('[ng-model="ctrl.data.PIRRate"] .control-well')
        this.pirOption = Selector('[ng-model="ctrl.data.PIRRate"] .dropdown .label>span').withText('17.5%')
        this.riskprofile = Selector('[label="Risk profile"] .input-label').withText('High')
        this.projection = Selector('[ng-show="ctrl.data.formCompleted"]')
        this.projectionText = Selector('.result-title')
        this.projectionValue = Selector('.result-value')

    }
    async navigateToRetirementCalculator(){
        await t
        .wait(3000)
        .click(this.testaaa)
        .switchToIframe("#calculator-embed > iframe")
        .typeText('[model="ctrl.data.CurrentAge"] input',"23")
        .click(this.icon)
        .expect(this.msg.withText('This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver.').exists).ok()
        .click(this.employeeDropDown)
        .click(this.employeeOption)
        .typeText(this.Salary , '82000')
        .click(this.rate)
        .click(this.pirDropDown)
        .click(this.pirOption)
        .click(this.riskprofile)
        .click(this.projection)
        .expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok().expect(this.projectionText.withText('At age 65, your KiwiSaver balance is estimated to be:').exists).ok()
        .expect(this.projectionValue.withText('419,836').exists).ok()
    }
}

export default new RetirementCalculator();