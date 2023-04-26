import { faker } from '@faker-js/faker';
export class Staff{

//Locators
staff_block_locator = ':nth-child(3) > .sc-kDTinF'
add_staff_locator = '.sc-fvpsdx'
add_name_locator = '[placeholder="Name"]'
add_email_locator = '[placeholder="Email"]'
add_username_locator = '[placeholder="UserName"]'
search_property_locator = '[placeholder="Search"]'
add_password_locator = '[placeholder="Password"]'
toggel_Activate_locator = '.sc-lgiseH > .sc-Galmp'
submit_button_locator = '.sc-dprhDC > .sc-jefHZX > .sc-fvpsdx'
active_toggle_locator = '.sc-Galmp'
filterbyproperty_locator = '.sc-gLDmcm > svg > path' 

selectclear_properties_locator = '.sc-gqtqkP'
search_admin = '.sc-bXdNzS '
admin_widget_locator = '.sc-eZmenu > :nth-child(1)'
editname_locator = '.sc-lbCmg > :nth-child(1) > .sc-hBUSln > .sc-bqiRlB'
editusername_locator = ':nth-child(2) > .sc-ksdxgE > .sc-hBUSln > .sc-bqiRlB'
editemail_locator = ':nth-child(3) > .sc-ksdxgE > .sc-hBUSln > .sc-bqiRlB'
edittitle_locator = ':nth-child(4) > .sc-ksdxgE > .sc-hBUSln > .sc-bqiRlB'
editcellphone_loccator = ':nth-child(5) > .sc-ksdxgE > .sc-hBUSln > .sc-bqiRlB'
editbio_locator = '.sc-ZOtfp'
upload_image_locator = '.sc-ibSMNl > .sc-jIkXHa'
updateadmin_locator = '.sc-fvpsdx'

password_tab_locator = '.sc-bVmfKC > :nth-child(2)'
password_reset_locator = '.sc-bXdNzS'
password_resettoggle_locator = ':nth-child(2) > .sc-Galmp'
save_password_locator = '.sc-fotOHu'

roles_tab_locator = '.sc-bVmfKC > :nth-child(3)'
click_superadmin_locator = '.sc-fMFgVn > :nth-child(1) > .sc-jpLtl'
click_maintenance_supervisor_locator = ':nth-child(3) > .sc-euucay'

properties_tab_locator = '.sc-bVmfKC > :nth-child(4)'
select_property1 = ':nth-child(1) > .sc-levzHu > .sc-kTwdzw'
select_property2 = ':nth-child(2) > .sc-levzHu > .sc-kTwdzw'
select_property3 =  ':nth-child(3) > .sc-levzHu > .sc-kTwdzw'

email_tab_locator = '.sc-bVmfKC > :nth-child(5)'
payment_email_locator = ':nth-child(1) > .sc-iGVQaA'
daily_payments_email_locator = ':nth-child(2) > .sc-iMrobD > .sc-Galmp'
failed_payments_email_locator = ':nth-child(3) > .sc-iMrobD > .sc-Galmp'
daily_moneygram_report_locator = ':nth-child(4) > .sc-iMrobD > .sc-Galmp'

action_tab_locator = '.sc-bVmfKC > :nth-child(6)'
backto_allstaff_locator = '.sc-bXyoGE'


getRandomName(){
    const randomName = faker.name.fullName();
    // return '${firstName} ${lastName}'
    return randomName
  }
 //Methods
 navigator(url){
    cy.visit(url)
    }
    staffBlock(){
        cy.get(this.staff_block_locator).click()
    }
    addStaff(){
        cy.get(this.add_staff_locator).click()
    }
    addName(){
        cy.get(this.add_name_locator).type('Andrew')
    }
    addEmail(){
        const randomEmail = faker.internet.email()
        cy.get(this.add_email_locator).type(randomEmail)
    }
    addUserName(){
        const randomName = faker.internet.userName()
        cy.get(this.add_username_locator).type(randomName)
    }
    searchproperty(){
        cy.contains('Select a Property').click()
        cy.get(this.search_property_locator).type('Abby Ridge Apartment Homes')
        cy.contains('Abby Ridge Apartment Homes').click()
    }
    addPassword(){
        cy.get(this.add_password_locator).type('12345678', {force: true} )
    }
    checkSuperAdmin(){
        cy.get(this.toggel_Activate_locator).click()// expect(true).to.be.true
    }
    saveStaff(){
        cy.get(this.submit_button_locator).click()
    }
    selectOrClearAllProperties(){
        cy.get(this.filterbyproperty_locator).click()
        cy.get(this.selectclear_properties_locator).click({force: true})
    }
    searchAdmin(){
        cy.get(this.search_admin).type('Amna')
    }
    adminWidget(){
        cy.get(this.admin_widget_locator).click()
    }
    editName(){
        cy.get(this.editname_locator).clear().type('Amna Khalid')
    }
    editUserName(){
        const editEmail = faker.internet.userName()
        cy.get(this.editusername_locator).clear().type(editEmail)
    }
    editEmail(){
        const editEmail = faker.internet.email()
        cy.get(this.editemail_locator).clear().type(editEmail)
    }
    editTitle(){
        cy.get(this.edittitle_locator).clear().type('Sr.SQA')
    }
    editCellPhone(){
        cy.get(this.editcellphone_loccator).clear().type('+923070706838')
    }
    editBio(){
        cy.get(this.editbio_locator).clear().type('I am Software Test Engineer having 5+ year of experience in testing different domains')
    }
    uploadImage(){
        cy.get(this.upload_image_locator).selectFile('/Users/amnakhalid/Desktop/Arborgate-Banner.jpeg')
    }
    updateAdmin(){
        cy.get(this.updateadmin_locator).click({force: true})
    }
    passwordTab(){
        cy.get(this.password_tab_locator).click()
    }
    resetPassword(){
        cy.get(this.password_reset_locator).type('12345678')
    }
    passwordToggle(){
        cy.get(this.password_resettoggle_locator).click({force: true})
    }
    rolesTab(){
        cy.get(this.roles_tab_locator).click()
    }
    superAdmin(){
        cy.get(this.click_superadmin_locator).click()
    }
    maintenanceSupervisor(){
        cy.get(this.click_maintenance_supervisor_locator).click({force: true})
    }
    propertiesTab(){
        cy.get(this.properties_tab_locator).click()
    }
    selectProperties(){
        cy.get(this.select_property1).click()
        cy.get(this.select_property2).click()
        cy.get(this.select_property3).click()
    }
    emailTab(){
        cy.get(this.email_tab_locator).click()
    }
    paymentEmails(){
        cy.get(this.payment_email_locator).click()
    }
    dailyPayments(){
        cy.get(this.daily_payments_email_locator).click()
    }
    failedpayments(){
        cy.get(this.failed_payments_email_locator).click()
    }
    daiilyMoneygram(){
        cy.get(this.daily_moneygram_report_locator).click()
    }
    actionTab(){
        cy.get(this.action_tab_locator).click()
    }
    backToStaff(){
        cy.get(this.backto_allstaff_locator).click()
    }

   











    
  
}