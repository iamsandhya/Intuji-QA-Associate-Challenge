import ProductDetailPage from "../ProductsPage/ProductDetailpage";

class CartPage{
  visit(){
    cy.visit('/view_cart');
  }


  updateQuantity(cartIndex = 0, quantity = 1) {
    // Redirect to Specifc detail page
    cy.get('tbody tr')
      .eq(cartIndex) // or .eq(0)
      .find('.cart_description h4 a')
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href);
      });

      // Increment the quantity 
      cy.get('#quantity')
      .clear()
      .type(quantity)
      .should('have.value', quantity);

      // Adds the item to cart
      const porductDetailPage = new ProductDetailPage();
      porductDetailPage.addToCart();

  }

  /**
   * Verify the total amount
   * Get the qunatity, price and then comapres it with total amount
   */
  verifyTotalAmount(cartIndex = 0){
    cy.get('tbody tr').eq(cartIndex).within(() => {
      cy.get('.cart_quantity button').invoke('text').then((quantityText) => {
        const quantity = quantityText.trim();
        
        cy.get('.cart_price p').invoke('text').then((priceText) => {
          const price = priceText.trim();
    
          cy.get('.cart_total_price').invoke('text').then((totalText) => {
            const total = totalText.trim();
  
            const expectedTotal = parseInt(price.replace('Rs. ', '')) * parseInt(quantity);
            expect(parseInt(total.replace('Rs. ', ''))).to.equal(expectedTotal);
          });
        });
      });
    });
    

  }

  /**
   * Removes the item from the cart
   */
  removeProduct(cartIndex) {
    cy.get('tbody tr').eq(cartIndex)
    .find('.cart_quantity_delete')
    .click();

  }

  /**
   * verify the cart items list 
   */
  verifyTotalCartItems(itemCount) {
    cy.get('tbody tr').should('have.length', itemCount);
  }
}
export default CartPage;