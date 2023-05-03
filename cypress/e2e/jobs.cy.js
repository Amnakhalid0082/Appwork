import { Jobs } from "./pages/jobs"
const jobs = new Jobs()

describe('jobs test',()=>{
    before(()=> {
        jobs.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(2000)
        jobs.navigator('https://admin.appworkco-beta.com/application_settings')

    })

    beforeEach(()=>{
        cy.viewport(1320, 768)
        cy.wait(2000)
       })

       it('Click on jobs block',()=>{
           jobs.jobsBlock()
       })
       it('Click on award tech badge job',()=>{
           jobs.awardtechJob()
       })

       it('Click on add jobs',()=>{
        jobs.addJobs()
        })

       it('Click on minutes dropdown',()=>{
           jobs.minutes()
       })

       it('Select 5 minutes from dropdown',()=>{
            jobs.selectminutes()
        })

        it('Click on hours dropdown',()=>{
           jobs.hours()
       })
       it('Select 1 hour from dropdown',()=>{
            jobs.selectHours()
        })
        it('Click on days dropdown',()=>{
            jobs.days()
        })
        it('Select day from dropdown',()=>{
            jobs.selectDays()
        })
        it('Click on Wdays dropdown',()=>{
            jobs.wDays()
        })
        it('Select Wday from dropdown',()=>{
            jobs.selectWdays()
        })
        it('Click on months dropdown',()=>{
            jobs.Months()
        })
        it('Select month from dropdown',()=>{
            jobs.selectMonths()
        })
        it('Click on save button to save jobs',()=>{
            jobs.saveButton()
        })
        it('Click on delete button to delete recently created job',()=>{
            jobs.deleteJob()
        })
    

})