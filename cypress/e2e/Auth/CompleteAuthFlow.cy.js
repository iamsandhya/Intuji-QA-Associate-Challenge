import SignupPage from '../../pages/AuthPage/SignupPage';

describe('Auth Flow', () => {
  let user;

  before(() => {
    const signupPage = new SignupPage();
    user = signupPage.generaterUserFakerInfo();
  });

  it('User signs up successfully', () => {
    cy.signup(user);

    // Save user fixture
    cy.writeFile('cypress/fixtures/User.json', user);
  });

  it('User logouts successfully after signup', () => {
    cy.logout();
  });

  it('User logs in successfully', () => {
    cy.login(user.email, user.password);
  });

  it('User logs out successfully after login', () => {
    cy.logout();
  });
});
