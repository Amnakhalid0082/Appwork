import { ProppertyGroups } from "./pages/propertygroups";
const propertygroup = new ProppertyGroups()
describe('property group test',()=>{
    before(()=>{
        propertygroup.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(4000)
        propertygroup.navigator('https://admin.appworkco-beta.com/application_settings')
    })
    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(1000)
    })
    it('Click on property groups block',()=>{
        cy.loginSession
        propertygroup.propertygrouptab()
        cy.wait(3000)
    })
    it('Click on new region',()=>{
        propertygroup.newRegionButton()
        cy.wait(3000)
    })
    it('Add region name',()=>{
        propertygroup.regionName()
        cy.wait(3000)
    })
    it('Click on save region',()=>{
        propertygroup.saveRegionButton()
        cy.wait(3000)
    })
    it('Click to select property',()=>{
        propertygroup.clickToSelectProperty()
        cy.wait(3000)
    })
    it('Select properties',()=>{
        propertygroup.selectProperties()
    })
    it('Go to workorders page',()=>{
        propertygroup.workOrders()
        cy.wait(3000)
    })
    it('Click on property selector',()=>{
        propertygroup.clickPropertySelector()
        cy.wait(3000)

    })
    it('Click on new region group',()=>{
        propertygroup.selectRegion()
        cy.wait(2000)
    })
    it('go back to system settings',()=>{
        cy.go('back')
        propertygroup.propertygrouptab()
    })
    it('Click to rename region',()=>{
        propertygroup.renameRegion()
        cy.wait(2000)
    })
    it('Click to delete region',()=>{
        propertygroup.deleteRegion()
    })
 


})



