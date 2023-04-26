export class Navigations {
//Locators
 dashboard_locator = '[href="/"]'
 alert_locator = ':nth-child(1) > .bbICrZ'
 application_locator = '[href="/applications"]'
 purchase_order_locator = '[href="/approvals"]'
 purchase_order_analytics_locator = '[href="/approvals_analytics"]'
 payments_locator = '[href="/payments"]'
 payments_analytics_locator = '[href="/payments_analytics"]'
 letters_locator = '[href="/letters"]'
 residents_locator = '[href="/tenants"]'
 bulk_emails_locator = '[href="/mailings"'
 units_locator = '[href="/units"]'
 packages_locator = '[href="/packages"]'
 redemptions_locator = '[href="/redemptions"]'
 workorders_locator = '[href="/orders"]'
 inspection_locator = '[href="/inspections"]'
 make_ready_locator = '[href="/make_ready"]'
 insight_report_locator = '[href="/maintenance_insight_reports"]'
 techs_locator = '[href="/techs"]'
 analytics_locator = '[href="/maintenance_analytics"]'
 reports_locator = '[href="/maintenance_reports"]'
 vendors_locator = '[href="/vendors"]'
 
 //Methods
    navigator(url){
    cy.visit(url)
    }

    dashboard(){
        cy.get(this.dashboard_locator).click()
    }
    alert(){
        cy.get(this.alert_locator).click()
    }
    application(){
        cy.get(this.application_locator).click()
    }
    purchaseOrder(){
        cy.get(this.purchase_order_locator).click()
    }
    purchaseOrderAnalytics(){
        cy.get(this.purchase_order_analytics_locator).click()
    }
    payments(){
        cy.get(this.payments_locator).click()
    }
    paymentAnalytics(){
        cy.get(this.payments_analytics_locator).click()
    }
    letters(){
        cy.get(this.letters_locator).click()
    }
    residents(){
        cy.get(this.residents_locator).click()
    }
    bulkEmails(){
        cy.get(this.bulk_emails_locator).click()
    }
    units(){
        cy.get(this.units_locator).click()
    }
    packages(){
        cy.get(this.packages_locator).click()
    }
    redemptions(){
        cy.get(this.redemptions_locator).click()
    }
    workOrders(){
        cy.get(this.workorders_locator).click()
    }
    inspection(){
        cy.get(this.inspection_locator).click()
    }
    makeReady(){
        cy.get(this.make_ready_locator).click()
    }
    insightReport(){
        cy.get(this.insight_report_locator).click()
    }
    techs(){
        cy.get(this.techs_locator).click()
    }
    analytics(){
        cy.get(this.analytics_locator).click()
    }
    reports(){
        cy.get(this.reports_locator).click()
    }
    vendors(){
        cy.get(this.vendors_locator).click()
    }

}
