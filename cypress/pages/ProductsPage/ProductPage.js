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

  clickProduct(index){
    cy.xpath("(//a[contains(text(),'View Product')])")
    .eq(index)
    .click();
  }

}

export default ProductsPage;