describe('Product Browsing & Filtering Test',()=>{ 

  it('filter products by Women',()=>{
      // Step 1: Visit the website
      cy.visit('https://automationexercise.com');  
      cy.get('a[href="/products"]').click();                                  //this command helps to lunch url.
      
      // Click on Category >Women > Dress
      cy.contains('Category');
      cy.contains('Category').parent().contains('Women').click();
      cy.contains('Dress').click();

      //check productlist contains at least one expected keyword
      cy.get('.features_items .productinfo.text-center').should('exist');

      cy.xpath("(//a[contains(text(),'View Product')])[1]").click();

      // Check product details page elements( Product Name, Price, Availability)
    cy.get('.product-information h2').should('exist').and('not.be.empty'); 
    cy.get('.product-information span span').should('exist'); 
    cy.get('.product-information p').contains('Availability').should('exist'); 
  })
  
})