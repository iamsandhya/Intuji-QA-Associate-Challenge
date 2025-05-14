import LoginPage from "../pages/LoginPage";
import LogOutPage from "../pages/LogoutPage";
import SignupPage from "../pages/SignupPage"




//SignupPage Command
Cypress.Commands.add('signup', (user) => {
  const signupPage = new SignupPage();
  signupPage.visit();
  signupPage.fillSignupForm(user);
  signupPage.submit('signup-button');
  signupPage.fillGender(1); // Mr
  signupPage.fillDateOfBirth(22, 5, "2021");
  signupPage.fillRegistrationPasswordField(user.password);
  signupPage.fillUserInfo(user);
  signupPage.submit('create-account');
  signupPage.clickContinue('continue-button');
}) ;

//login Command
Cypress.Commands.add('login',(email,password)=>{
  const loginpage = new LoginPage();
  loginpage.visit();
  loginpage.fillupEmail(email);
  loginpage.fillupPassword(password);
  loginpage.submit('login-button');
});

//Logout Command
Cypress.Commands.add('logout',()=>{
  const logoutpage =new LogOutPage();
  logoutpage.visit();
  logoutpage.logoutbutton();
});
