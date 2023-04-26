import { themes } from "./pages/themes"
const theme = new themes()
describe('theme test',()=>{
    before(()=>{
       theme.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(4000)
        theme.navigator('https://admin.appworkco-beta.com/application_settings')
    })
    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(1000)
    })
    it('Click on core tab',()=>{
        cy.loginSession
        theme.Coretab()
        cy.wait(3000)
    })
    it('Go to theme block',()=>{
        
        theme.themesBlock()
        cy.wait(3000)
    })
    it('Click on logo url field',()=>{
        theme.applicationurl()
        cy.wait(3000)
    })
    it('Change primary color ',()=>{
        theme.primaryColor()
        cy.wait(3000)
    })
    it('Change secondary color ',()=>{
        theme.secondaryColor()
        cy.wait(3000)
    })
    it('Change sidebar color ',()=>{
        theme.sidebarColor()
        cy.wait(3000)
    })
    it('Change sidebar text color ',()=>{
        theme.sidebarTextColor()
        cy.wait(3000)
    })
    it('Click on save theme button',()=>{
        theme.saveTheme()
        cy.wait(3000)
        //theme.verifyPrimaryColor()
    })
    it('Reset logo url field',()=>{
        theme.resetUrl()
        cy.wait(3000)
    })
    it('Reset primary color',()=>{
        theme.resetPrimaryColor()
        cy.wait(3000)
    })
    it('Reset secondary color',()=>{
        theme.resetSecondaryColor()
        cy.wait(3000)
    })
    it('Reset sidebar color',()=>{
        theme.resetSidebarColor()
        cy.wait(3000)
        cy.reload()
    })
   
    
})