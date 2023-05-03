export class Jobs{

//Locators

jobs_block_locator = ':nth-child(5) > .sc-kDTinF'
award_tech_locator = '.sc-dJjNIA > :nth-child(1)'
add_jobs_locator = '.sc-kERfxD > .sc-jefHZX > .sc-fvpsdx'
minutes_locator = ':nth-child(2) > .sc-cOLXoO > .sc-iOLxrX > :nth-child(2) > svg'
select_minutes_locator = '.sc-hvoJYN > :nth-child(3)'
hours_locator = ':nth-child(4) > .sc-cOLXoO > .sc-iOLxrX'
select_hour_locator = '.sc-hvoJYN > :nth-child(3)'
days_locator = ':nth-child(6) > .sc-cOLXoO > .sc-iOLxrX'
select_days_locator = '.sc-hvoJYN > :nth-child(2)'
wdays_locator = ':nth-child(8) > .sc-cOLXoO > .sc-iOLxrX'
select_wdays_locator = '.sc-hvoJYN > :nth-child(2)'
months_locator = ':nth-child(10) > .sc-cOLXoO > .sc-iOLxrX'
select_month_locator = '.sc-hvoJYN > :nth-child(2)'
save_jobs_locator = ':nth-child(1) > .sc-fvpsdx'
delete_jobs_locator = '.sc-jIukRC > :nth-child(2) > .sc-fvpsdx'


//Methods
    navigator(url){
    cy.visit(url)
    }

    jobsBlock(){
        cy.get(this.jobs_block_locator).click()
    }
    awardtechJob(){
        cy.get(this.award_tech_locator).click()
    }
    addJobs(){
        cy.get(this.add_jobs_locator).click()
    }
    minutes(){
        cy.get(this.minutes_locator).click()
    }
    selectminutes(){
        cy.get(this.select_minutes_locator).click()
    }
    hours(){
        cy.get(this.hours_locator).click({force: true})
    }
    selectHours(){
        cy.get(this.select_hour_locator).click()
    }
    days(){
        cy.get(this.days_locator).click( {force: true})
    }
    selectDays(){
        cy.get(this.select_days_locator).click()
    }
    wDays(){
        cy.get(this.wdays_locator).click({force: true})
    }
    selectWdays(){
        cy.get(this.select_wdays_locator).click()
    }
    Months(){
        cy.get(this.months_locator).click({force: true})
    }
    selectMonths(){
        cy.get(this.select_month_locator).click()
    }
    saveButton(){
        cy.get(this.save_jobs_locator).click({force: true})
    }
    deleteJob(){
        cy.get(this.delete_jobs_locator).click()
    }




}