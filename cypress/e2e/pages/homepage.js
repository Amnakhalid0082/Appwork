export class Homepage{
    //Locators
    Login_button_locator = '.btn-ngt-login' 
    Login_email_locator = '#create_email'
    Login_password_locator = '#create_password'

    //Methods
    navigator(url){
    cy.visit(url);
    }

    loginTrigger(){
        cy.get(this.Login_button_locator).click()
        cy.wait(2000)
    }

    emailWithValidationCheck(email1, email2, email3){
        cy.get(this.Login_email_locator).type(email1); //test
        cy.wait(2000);

        cy.get(this.Login_button_locator).click()
        cy.wait(2000);

        cy.get(this.Login_email_locator).click().focused();

        cy.get(this.Login_email_locator).type(email2); //test@test
        cy.wait(2000);

        cy.get(this.Login_button_locator).click()
        cy.wait(2000);

        cy.get(this.Login_email_locator).click().focused();

        cy.get(this.Login_email_locator).type(email3); //test@test
        cy.wait(2000);

        cy.get(this.Login_button_locator).click()
    }
    login(email, pwd){
        cy.get(this.Login_email_locator).type(email);
        cy.wait(2000);

        cy.get(this.Login_password_locator).type(pwd);
        cy.wait(1000);
        
        this.loginTrigger();
    }

} 