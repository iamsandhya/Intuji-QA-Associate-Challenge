import SignupPage from '../../pages/AuthPage/SignupPage';

describe('Unique Email validation', () => {
  let user;
  let signupPage;

   // Runs once before all tests in the block- generates the user object only once.
  before(()=>{
    signupPage = new SignupPage();
    user = signupPage.generaterUserFakerInfo();
  })


  it('should render error when users tries to signup from already exisiting email', () => {
    cy.signup(user);
    cy.logout();
    // trying to signup from same user again
    signupPage.fillSignupForm(user);
    signupPage.submit();
    // asserts the email already exist validation
    cy.get('form[action="/signup"]')
    .contains('p', 'Email Address already exist!')
    .should('be.visible');
  });
  
})
