export class Roles{

//Locators
roles_block_locator = ':nth-child(4) > .sc-kDTinF'
new_role_locactor = '.sc-fvpsdx'
role_name_locator = '.sc-gFSQbh'
create_role_locator = '.sc-iNpzLj > .sc-jefHZX > .sc-fvpsdx'
delete_role_locator   = '.sc-ksDcAU'
no_access_locator = ':nth-child(1) > .sc-iMrobD > .evVswF'
application_yes_locator = ':nth-child(2) > .sc-iMrobD > .evVswF'
application_no_locator = ':nth-child(2) > .sc-iMrobD > .dnVwR'
core_tab_locator = '.sc-eQxpLG > .sc-halPKt > .sc-iMrobD > :nth-child(2) > .sc-jSYIrd > .sc-egiyK'



//Methods
navigator(url){
    cy.visit(url)
    }
    rolesBlock(){
        cy.get(this.roles_block_locator).click()
    }
    newRole(){
        cy.get(this.new_role_locactor).click()
    }
    roleName(){
        cy.get(this.role_name_locator).type('Test Role')
    }
    createRole(){
        cy.get(this.create_role_locator).click()      
    }
    deleteRole(){
        cy.contains('Test Role').click()
        cy.get(this.delete_role_locator).click()
    }
    application(){
        cy.get('.sc-hPmGNk > :nth-child(1) > .sc-iMrobD').within(() => {
            cy.get('.sc-kLGmG').each(($toggleButton) => {
                cy.wrap($toggleButton).click() // click on each child div individually to toggle its state
              })
          })

        }
     updateApplicationFee(){
            cy.get(':nth-child(2) > .sc-iMrobD').within(() => {
                cy.get('.sc-kLGmG').each(($toggleButton) => {
                    cy.wrap($toggleButton).click() // click on each child div individually to toggle its state
                  })
              })

            }
        


   

   


}