import { faker } from '@faker-js/faker';

describe('User Signup', () => {
  let user;

   // Runs once before all tests in the block- generates the user object only once.
  before(()=>{
    user = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zip: faker.location.zipCode(),
      phone: faker.phone.number()
    }
  })
  
  // Runs before every it() block — visits the registration page before each test.
  beforeEach(() => {
  })

  it('should register a new user successfully', () => {
    cy.signup(user);

    // 
    cy.getCookies().then((cookies) => {
      cy.writeFile('cypress/fixtures/SessionCookies.json', cookies);
    })
  })
})
