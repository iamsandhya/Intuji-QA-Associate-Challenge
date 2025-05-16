import LoginPage from "../pages/AuthPage/LoginPage";
import LogOutPage from "../pages/AuthPage/LogoutPage";
import SignupPage from "../pages/AuthPage/SignupPage"
import CartPage from "../pages/CartPage/CartPage";
import ProductDetailPage from "../pages/ProductsPage/ProductDetailpage";
import ProductsPage from "../pages/ProductsPage/ProductPage";




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

//Product Command
Cypress.Commands.add('verifyproduct',(productdata, productIndex) => {
  const productpage =new ProductsPage();
  const productDetailPage = new ProductDetailPage();
  productpage.visit();
  productpage.filterBYCategory(productdata);
  productpage.clickProduct(productIndex);
  productDetailPage.verifyProductName();
  productDetailPage.verifyProductPrice();
  productDetailPage.verifyAvailability();
  productDetailPage.addToCart();
  
});


//CartPage Command
Cypress.Commands.add('managecart',()=>{
  const cartPage =new CartPage();
  const cartIndex = 0; // 1st item of the cart
  cartPage.visit();
  // Increase the qunatity by 2
  cartPage.updateQuantity(cartIndex, 2);
  cartPage.visit();
  cartPage.verifyTotalAmount(cartIndex);
  //Remove the 2nd cart Item
  cartPage.removeProduct(1);
  // verfify that cart has only one item left
  cartPage.verifyTotalCartItems(1);
})