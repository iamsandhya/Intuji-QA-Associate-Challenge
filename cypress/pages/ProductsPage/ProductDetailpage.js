class ProductDetailPage {
  verifyProductName() {
    // cy.get('div[class="product-information"] h2').should('exist').and('not.be.empty'); 
    cy.get('.product-information h2').should('be.visible') .and('not.be.empty');;
  }

  verifyProductPrice() {
    cy.get('.product-information span span').should('be.visible') .and('not.be.empty');;
  }

  verifyAvailability() {
    cy.get('.product-information p').contains('Availability').should('be.visible');
  }
}

export default ProductDetailPage;
