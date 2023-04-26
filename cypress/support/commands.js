// Cypress.Commands.add('login', (email, password) => {
//     cy.session('loginSession', () => {
//       //cy.visit('https://admin.appworkco-beta.com/sessions')
//       cy.get('#create_email').type(email)
//       cy.get('#create_password').type(password)
//       cy.get('.btn-ngt-login').click();
//     //   cy.url().should('contain', '/login-successful')
//     })
//   })

  Cypress.Commands.add('login', (email, password)=> {
    cy.session("loginSession", () => {
        cy.visit('https://admin.appworkco-beta.com/sessions')
        // cy.wait(1000);
        cy.get('#create_email').type(email)
        cy.wait(1000);
        cy.get('#create_password').type(password)
        cy.wait(1000);
        cy.get('.btn-ngt-login').click();
        cy.wait(1000);

    })
})