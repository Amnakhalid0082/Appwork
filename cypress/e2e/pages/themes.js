import chaiColors from 'chai-colors'
chai.use(chaiColors)

export class themes{
    
    core_locator = ':nth-child(1) > .sc-gKclnd'
    themes_block_locator = ':nth-child(1) > .sc-kDTinF' 
    Logo_url_locator = '.sc-bznFSB > .sc-giYglK'
    url_locator = '.sc-eJKagG'
    primary_color_locator = '#rc-editable-input-1'
    secondary_color_locator = '#rc-editable-input-2'
    sidebar_color_locator = '#rc-editable-input-3'
    sidebar_text_color_locator = '#rc-editable-input-4'
    save_themes_button_locator = '.sc-fotOHu'
    
    reset_url_locator = ':nth-child(1) > .sc-iqVWFU'
    reset_primary_color_locator = ':nth-child(2) > .sc-iqVWFU'
    reset_secondary_color_locator = ':nth-child(3) > .sc-iqVWFU'
    reset_sidebar_color_locator = ':nth-child(4) > .sc-iqVWFU'
    reset_sidebar_text_color_locator = ':nth-child(5) > .sc-iqVWFU'
    
    //Methods
     navigator(url){
        cy.visit(url)
        }
        Coretab(){
            cy.get(this.core_locator).click()
            cy.get(this.Logo_url_locator).should('contain', 'Logo Url')
        }
        themesBlock(){
            cy.get(this.themes_block_locator).click()
        }
        applicationurl(){
            cy.get(this.url_locator).should('be.visible').type('https://www.google.com/')
        }
        primaryColor(){
            cy.get(this.primary_color_locator).clear().type('#BD531D')
        }
        secondaryColor(){
            cy.get(this.secondary_color_locator).clear().type('#0A2C0B')
        }
        sidebarColor(){
            cy.get(this.sidebar_color_locator).clear().type('#FBFBFB')
        }
        sidebarTextColor(){
            cy.get(this.sidebar_text_color_locator).clear().type('#050000')
        }
        saveTheme(){
            cy.get(this.save_themes_button_locator).click().should('be.visible')
            cy.url().should('include', '/application_settings')
        }
        verifyPrimaryColor(){
            cy.get(this.primary_color_locator)
            .should('have.css', 'background')
            .and('be.colored', '#BD531D')
        }

        resetUrl(){
            cy.get(this.reset_url_locator).click()
            cy.on('window:alert',function(AlertText) // for alert type

            {expect(AlertText).eql('Reset this setting to default?')
            
            })
               
        //     cy.on('window:alert',(txt)=>{
        //     expect(txt).to.contains('Reset this setting to default?')
        // })  
        }

        resetPrimaryColor(){
            cy.get(this.reset_primary_color_locator).click()
        }
        resetSecondaryColor(){
            cy.get(this.reset_secondary_color_locator).click()
        }
        resetSidebarColor(){
            cy.get(this.reset_sidebar_color_locator).click()
        }
        resetSidebarTextColor(){
            cy.get(this.reset_sidebar_text_color_locator).click()
        }

    }
    
    
    