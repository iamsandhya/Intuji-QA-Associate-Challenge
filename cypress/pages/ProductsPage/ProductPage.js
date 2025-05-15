class ProductsPage{
  visit(){
    cy.visit('/products');
  }

  // Filter products by Category → Women > Dress.
  filterBYCategory(productdata){
    cy.log('category:',productdata.category);
    cy.contains('a', productdata.category).click();
    cy.get(`#${productdata.category}`).should('have.class', 'in').contains(productdata.subcategory).click(); //  it's expanded 
      
  // Verify URL is updated
    cy.url().should('include', productdata.expectedProductUrl);
    
  }

  // Check if at least one expected keyword
  verifyFilteredProducts(expectedKeyword) {
    cy.get('.features_items')
      .find('.productinfo p')
      .should('contain.text', expectedKeyword);
  }
  clickFirstProduct(){
    cy.xpath("(//a[contains(text(),'View Product')])[1]").click();
  }

  // AddToCart() {
  //   cy.get('.product-image-wrapper').first().trigger('mouseover').within(() => {
  //     cy.contains('Add to cart').click();
  //   });
  //   cy.contains('Continue Shopping').click({ force: true });
  // }
}

export default ProductsPage;