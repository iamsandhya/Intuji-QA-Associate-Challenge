describe('Cart and Quantity Management',()=>{
  let user;
  let cartproduts;

  before(() => {
    cy.fixture('User').then((data) => {
      user = data;
    });
    
    cy.fixture('CartProducts').then((data)=>{
      cartproduts = data;
    });
  });
  
it('handling multiple items, change quantity, verifying total, and removing product', ()=>{
// Log in the user
    cy.login(user.email, user.password);

    // Add two products from different categories
    cy.verifyproduct(cartproduts[0], 0);
    cy.verifyproduct(cartproduts[1], 1);

    cy.managecart();

})
})