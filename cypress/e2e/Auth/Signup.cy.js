import SignupPage from '../../pages/AuthPage/SignupPage';

describe('User Signup', () => {
  let user;

   // Runs once before all tests in the block- generates the user object only once.
  before(()=>{
    const signupPage = new SignupPage();
    user = signupPage.generaterUserFakerInfo();
  })
  
  // Runs before every it() block — visits the registration page before each test.
  beforeEach(() => {
  })

  it('should register a new user successfully', () => {
    cy.signup(user);

    // Save session cookies
    cy.getCookies().then((cookies) => {
      cy.writeFile('cypress/fixtures/SessionCookies.json', cookies);
    });

    // Save generated user data to fixture
  cy.writeFile('cypress/fixtures/User.json', user);
});
  
})
