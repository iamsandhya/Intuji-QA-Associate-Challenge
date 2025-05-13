import SignupPage from "../pages/SignupPage"

Cypress.Commands.add('signup', (user) => {
  const signupPage = new SignupPage();
  signupPage.visit();
  signupPage.fillSignupForm(user);
  signupPage.submit('signup-button');
  signupPage.fillGender(1); // Mr
  signupPage.fillDateOfBirth(22, 5, "2021");
  signupPage.fillRegistrationPasswordField('Test@12345');
  signupPage.fillUserInfo(user);
  signupPage.submit('create-account');
})  