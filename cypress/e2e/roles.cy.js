import { Roles } from "./pages/roles"
const roles = new Roles()

describe('roles test',()=>{
   before(()=>{
        roles.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(2000)
        roles.navigator('https://admin.appworkco-beta.com/application_settings')
   })
   
   beforeEach(()=>{
    cy.viewport(1320, 768)
    cy.wait(2000)
   })

      it('Click on roles block',()=>{
     cy.loginSession
     roles.rolesBlock()
     })

     it('Click on new role button',() =>{
          roles.newRole()
     })
     it('Add roles title',() =>{
          roles.roleName()
     })
     it('Create new role',() =>{
          roles.createRole()
     })
     it('Click on delete role',() =>{
          roles.deleteRole()
     })
     it('Switch Application toggles ',()=>{
          roles.application()
     })
     it('Switch update application fee toggles ',()=>{
          roles.updateApplicationFee()
     })
     



     
 


})

