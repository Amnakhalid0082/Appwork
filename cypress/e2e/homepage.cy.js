import {Homepage} from './pages/homepage'
const Home = new Homepage()
describe('home page test', ()=> {
    before(()=> {
        Home.navigator('https://admin.appworkco-beta.com/sessions');
        
    })
    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(1000);
    })

    it('submission without input',()=> {
        Home.loginTrigger();
        cy.wait(3000);
    })
    it('invalid email',()=> {
        Home.emailWithValidationCheck('test', 'test@test', 'test.com');
        Home.loginTrigger();
    })
    it('Login with valid credentials.', ()=>{
        // Home.login('email@example.com', 'appw0rkd3vs!');
        cy.login('email@example.com', 'appw0rkd3vs!');

    })
})