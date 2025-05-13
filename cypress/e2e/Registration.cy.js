import { faker } from '@faker-js/faker'
import RegistrationPage from '../pages/registrationpage'


describe('login/registration', () => {
  let user;

   // Runs once before all tests in the block- generates the user object only once.
  before(()=>{
    user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.streetAddress(),
      state: faker.address.state(),
      city: faker.address.city(),
      zip: faker.address.zipCode(),
      phone: faker.phone.number()
    }
  })
  
  // Runs before every it() block — visits the registration page before each test.
  beforeEach(() => {
    RegistrationPage.visit()
  })

  it('should register a new user successfully', () => {
    RegistrationPage.fillSignupForm(user)
    RegistrationPage.fillRegistrationForm(user)
    
    // RegistrationPage.verifyLoggedIn(user)

    cy.getCookies().then((cookies) => {
      cy.writeFile('cypress/fixtures/sessionCookies.json', cookies)
    })
  })
})
