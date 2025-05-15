describe('Product Browsing & Filtering ', ()=>{
  let user;
  let product;

  before(() => {
    cy.fixture('User').then((data) => {
      user = data;
    });
    
    cy.fixture('Product').then((data)=>{
      product = data;
    });
  });

  it('should navigate to product page when user is logged in', () => {
    // Log in the user
    cy.login(user.email, user.password);

    // Confirm user is logged in by checking logout button is visible
    cy.get('a[href="/logout"]').should('be.visible');

    // Navigate to Productpage
      cy.verifyproduct(product, 0);
  

  });
});