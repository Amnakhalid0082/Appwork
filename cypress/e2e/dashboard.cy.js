import { before } from 'mocha'
import {Navigations} from './pages/dashboard'
const Navigation = new Navigations()
describe('navigations test', ()=> {
    before(()=> {
        Navigation.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(4000) 
    })
    // it('preserve session',()=> {
    //     cy.Home('email@example.com', 'appw0rkd3vs!')
    //    Navigation.dashboard();
    //     cy.wait(3000);
    // })

    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(1000)
    })
    it('go to alert',()=>{
        cy.loginSession
        Navigation.alert()
        cy.wait(3000)
    })
    it('go to applications',()=>{
        Navigation.application()
    })
    it('go to po',()=>{
        Navigation.purchaseOrder()
    })

    it('go to po analytics',()=>{
        Navigation.purchaseOrderAnalytics()
    })
    it('go to payments',()=>{
        Navigation.payments()
    })
    it('go to payments analytics',()=>{
        Navigation.paymentAnalytics()
    })
    it('go to letters',()=>{
        Navigation.letters()
    })
    it('go to residents',()=>{
        Navigation.residents()
    })
    it('go to bulk emails',()=>{
        Navigation.bulkEmails
    })
    it('go to units',()=>{
        Navigation.units()
    })
    it('go to packages',()=>{
        Navigation.packages()
    })
    it('go to redemption',()=>{
        Navigation.redemptions()
    })
    it('go to workorders',()=>{
        Navigation.workOrders()
    })
    it('go to makeready',()=>{
        Navigation.makeReady()
    })
    it('go to insight report',()=>{
        Navigation.insightReport()
    })
    it('go to techs',()=>{
        Navigation.techs()
    })
    it('go to analytics',()=>{
        Navigation.analytics()
    })
    it('go to reports',()=>{
        Navigation.reports()
    })
    it('go to vendors',()=>{
        Navigation.vendors()
    })
})
    