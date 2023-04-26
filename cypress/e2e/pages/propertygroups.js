export class ProppertyGroups{
//Locators
core_locator = ':nth-child(1) > .sc-gKclnd'
propertygroup_locator  = ':nth-child(2) > .sc-kDTinF'
block_locator  = '.sc-LQqIQ'
new_region_locator = ".sc-fvpsdx"
region_name_locator = '.sc-fvxzrP'
save_region_locator = '.sc-fvpsdx'
property_selector_locator = 'sc-gRtYjc ciTGuz'
workorders_locator = '[href="/orders"]'
search_region_locator = 'sc-gpcHMt acZle'
change_name_locator = ':nth-child(4) > .sc-cbTmKc > .sc-iboAsT > .sc-fDMmqs > :nth-child(1) > .sc-jgaZKu > .sc-ksDcAU'
update_groupname = '.sc-fvxzrP'
rename_done_locator = ':nth-child(4) > .sc-cbTmKc > .sc-iboAsT > .sc-fDMmqs > :nth-child(1) > .sc-jgaZKu'

//Methods
    navigator(url){
    cy.visit(url)
    }
    Coretab(){
        cy.get(this.core_locator).click()
    }
    propertygrouptab(){
        cy.get(this.propertygroup_locator).click()
        cy.get(this.block_locator).click({force: true})
        
        // cy.scrollTo('bottom')
        // cy.get(this.block_locator).scrollIntoView()
        // cy.scrollTo(0, 500)
    }
    newRegionButton(){
        cy.get(this.new_region_locator).click()
    }
    regionName(){
        cy.get(this.region_name_locator).type('New Region')
    }
    saveRegionButton(){
        cy.get(this.save_region_locator).click()
    }
    clickToSelectProperty(){
        cy.contains('div', 'New Region')
        // cy.get('sc-cbTmKc eVzakP').children().should('have.value', 'New Regin')
        // cy.debug()
        cy.contains('New Region').then(elment=>{
        // cy.contains('Included properties:').click()
        cy.contains('div', 0).click()
        }) 
    }
    selectProperties(){
        
        cy.contains('Abby Ridge Apartment Homes').click({force: true})
        cy.contains('Alera West').click()
        cy.contains('Alpine Apartment Homes').click()
        // cy.get(this.selector_main_div_locator).contains('Alpine Apartment Homes').click()
    }
    
    workOrders(){
        cy.get(this.workorders_locator).click()
    }
    clickPropertySelector(){
        cy.contains('Filter by property:').click()
        // cy.get(this.search_region_locator).click()
        // cy.get(this.search_region_locator).type('New Region')
    }
    selectRegion(){
        cy.contains('New Region').click({force: true})
    }
    renameRegion(){
        cy.contains('div', 3).click()
        cy.get(this.change_name_locator).click({force: true})
        cy.get(this.update_groupname).clear().type('New Region Rename')
        cy.get(this.rename_done_locator).click()
    }
    deleteRegion(){
        cy.contains('div', 3)
        cy.contains('Delete Group').click()

    }

    




}

