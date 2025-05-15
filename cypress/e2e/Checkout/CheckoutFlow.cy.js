import CartPage from "../../pages/CartPage/CartPage";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import PaymentPage from "../../pages/PaymentPage/PaymentPage";

describe('Product Browsing & Filtering ', ()=>{
  let user;
  let cartPage;
  let checkoutPage;
  let paymentPage;

  before(() => {
    cy.fixture('User').then((data) => {
      user = data;
    });

    cartPage = new CartPage();
    checkoutPage = new CheckoutPage();
    paymentPage = new PaymentPage();
    
  });

  it('should navigate to cart page and proceed to checkout', () => {
    // Log in the user
    cy.login(user.email, user.password);

    // Confirm user is logged in by checking logout button is visible
    cy.get('a[href="/logout"]').should('be.visible');

    // Navigate to cart page
    cartPage.visit();

    checkoutPage.proceedToCheckout();

    // 2 because one row is taken by total amount
    // so this means I have one item list
    checkoutPage.verifyItemListCount(2);

    // visit to payment phase
    cy.visit('/payment');

    // Enter the card details
    const cardDetails = paymentPage.generateCardFakerInfo();
    paymentPage.fillCardInfo(cardDetails);

    // submit the payment
    paymentPage.submit();

    // verify order placed
    paymentPage.verifyOrderPlaced();

  });
});