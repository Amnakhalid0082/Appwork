import { Staff } from "./pages/staff"

const staff = new Staff()


describe('staff test',()=>{
    before(()=>{
        staff.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(2000)
        staff.navigator('https://admin.appworkco-beta.com/application_settings')
    })
    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(1000)
    })
// Create New Admin/Staff
    it('Click on staff block',()=>{
        cy.loginSession
        cy.wait(2000)
        staff.staffBlock()
    })
    // it('Click on add new staff',()=>{
    //     staff.addStaff()
    //     cy.wait(3000)
    // })
    // it('Add Name',()=>{
    //     staff.addName()
    // })
    // it('Add email',()=>{
    //     staff.addEmail()
    // })
    // it('Add user name',()=>{
    //     staff.addUserName()
    // })
    // it('Search and select Abby Ridge Apartment Homes',()=>{
    //     staff.searchproperty()
    // })
    // it('Add password',()=>{
    //     staff.addPassword()
    // })
    // it('Check super admin',()=>{
    //     staff.checkSuperAdmin()
    // })
    // it('Submit and create Amdmin',()=>{
    //     staff.saveStaff()
    // })
// Edit Admin Profile

    it('Select or clear all properties form filter by property',()=>{
        staff.selectOrClearAllProperties()
    })
    it('Search admin',()=>{
        staff.searchAdmin()
    })
    it('Click on admin',()=>{
        staff.adminWidget()
    })
    // it('Edit name',()=>{
    //     staff.editName()
    // })
    // it('Edit user name',()=>{
    //     staff.editUserName()
    // })
    // it('Edit email',()=>{
    //     staff.editEmail()
    // })
    // it('Edit title',()=>{
    //     staff.editTitle()
    // })

    // it('Edit cell phone',()=>{
    //     staff.editCellPhone()
    // })
    // it('Edit Bio',()=>{
    //     staff.editBio()
    // })
    // it('Upload admin profile image',()=>{
    //     staff.uploadImage()
    // })
    // it('Update Admin',()=>{
    //      staff.updateAdmin()
    //  })
// Password Tab
    // it('Click on password tab',()=>{
    //     staff.passwordTab()
    // })
    // it('Update password',()=>{
    //     staff.resetPassword()
    // })
    // it('Click on password reset Toggle button',()=>{
    //     staff.passwordToggle()
    // })
    
    // it('Click on save password button',()=>{
    //     staff.savePassword()
    // })
// Roles Tab
    // it('Click on roles tab',()=>{
    //     staff.rolesTab()
    // })
    // it('Click on Super Admin checkbox',()=>{
    //     staff.superAdmin()
    // })
    // it('Click on Maintanance Supervisor checkbox',()=>{
    //     staff.maintenanceSupervisor()
    // })
// Properties Tab

    // it('Click on properties tab',()=>{
    //     staff.propertiesTab()
    // })

    // it('Click on properties checkbox',()=>{
    //     staff.selectProperties()
    // })

    it('Click on email tab',()=>{
        staff.emailTab()
    })

// Email Tab
    it('Click on payment email panel',()=>{
        staff.paymentEmails()
    })

    it('Click daily payments email toggle button',()=>{
        staff.dailyPayments()
    })

    it('Click on failed payments email toggle button',()=>{
        staff.failedpayments()

    })
    it('Click on daily moneygram report',()=>{
        staff.daiilyMoneygram()
    })
    it('Click on action tab',()=>{
        staff.actionTab()
    })
    it('Click on backn to all staff',()=>{
        staff.backToStaff()
    })


})
