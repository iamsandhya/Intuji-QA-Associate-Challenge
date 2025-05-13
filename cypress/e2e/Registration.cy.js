import { faker } from '@faker-js/faker'
import RegistrationPage from '../pages/registrationpage'


describe('login/registration', () => {
  const user = {
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

  it('should register a new user successfully', () => {
    RegistrationPage.visit()
    RegistrationPage.fillSignupForm(user)
    RegistrationPage.fillRegistrationForm(user)
    
    // RegistrationPage.verifyLoggedIn(user)

    cy.getCookies().then((cookies) => {
      cy.writeFile('cypress/fixtures/sessionCookies.json', cookies)
    })
  })
})
