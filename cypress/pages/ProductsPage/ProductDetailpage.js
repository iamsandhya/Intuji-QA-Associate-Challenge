class ProductDetailPage {
  verifyProductName() {
    cy.get('.product-information h2').should('be.visible') .and('not.be.empty');;
  }

  verifyProductPrice() {
    cy.get('.product-information span span').should('be.visible') .and('not.be.empty');;
  }

  verifyAvailability() {
    cy.get('.product-information p').contains('Availability').should('be.visible');
  }

  addToCart() {
    cy.contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
  }
}

export default ProductDetailPage;
