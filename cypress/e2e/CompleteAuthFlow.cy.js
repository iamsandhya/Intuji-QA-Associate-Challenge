import { faker } from '@faker-js/faker';

describe('Auth Flow', () => {
  let user;

  before(() => {
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
    };
  });

  it('Signup user successfully', () => {
    cy.signup(user);

    // Save user fixture
    cy.writeFile('cypress/fixtures/User.json', user);
  });

  it('Logout user successfully after signup', () => {
    cy.logout();
  });

  it('Login user successfully', () => {
    cy.login(user.email, user.password);
  });

  it('Logout user successfully after login', () => {
    cy.logout();
  });
});
