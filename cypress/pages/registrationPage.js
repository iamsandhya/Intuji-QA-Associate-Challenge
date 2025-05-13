class RegistrationPage {
  visit() {
    cy.visit('https://automationexercise.com/login');
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
  }

  fillSignupForm(user) {
    cy.get("input[data-qa='signup-name']").type(user.name);
    cy.get("input[data-qa='signup-email']").type(user.email);
    cy.get("button[data-qa='signup-button']").click();
  }

  fillRegistrationForm(user) {
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);
    cy.get('#days').select('13');
    cy.get('#months').select('May');
    cy.get('#years').select('2020');

    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zip);
    cy.get('#mobile_number').type(user.phone);

    cy.get("button[data-qa='create-account']").click();
  }

  // verifyLoggedIn(user) {
  //   cy.get('b').should('contain', user.name)
  // }
}

export default new RegistrationPage()
