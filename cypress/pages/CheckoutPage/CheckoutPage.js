class CheckoutPage 
{
  proceedToCheckout() {
    cy.get('#do_action .check_out').click();
  }

  verifyItemListCount(itemCount){
    cy.get('#cart_info tbody tr').should('have.length', itemCount);
  }
}

export default CheckoutPage;