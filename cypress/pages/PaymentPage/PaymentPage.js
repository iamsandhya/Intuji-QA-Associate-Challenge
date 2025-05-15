import { faker } from "@faker-js/faker";

class PaymentPage {

  generateCardFakerInfo(){
    return {
      userName: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber(),
      cvc: faker.finance.creditCardCVV(),
      expiryMonth: faker.number.int({ min: 1, max: 12 }),
      expiryYear: faker.number.int({ min: 2026, max: 2030 })
    }
  }
  fillCardInfo(cardDetail) {
    cy.get("input[data-qa='name-on-card']").type(cardDetail.userName);
    cy.get("input[data-qa='card-number']").type(cardDetail.cardNumber);
    cy.get("input[data-qa='cvc']").type(cardDetail.cvc);
    cy.get("input[data-qa='expiry-month']").type(cardDetail.expiryMonth);
    cy.get("input[data-qa='expiry-year']").type(cardDetail.expiryYear);
  }
  
  submit() {
    cy.get(`button[data-qa='pay-button']`).click();
  }

  verifyOrderPlaced()
  {
    cy.contains('h2', 'Order Placed!').should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  }

}
export default PaymentPage;