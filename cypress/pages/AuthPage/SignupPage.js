class SignupPage {
  visit() {
    cy.visit('/login')
    cy.title().should('eq', 'Automation Exercise - Signup / Login');
  }

  fillSignupForm(user) {
    cy.get("input[data-qa='signup-name']").type(user.name);
    cy.get("input[data-qa='signup-email']").type(user.email);
  }

  // 1 = Mr, 2 = Mrs, 
  fillGender(genderId) {
    cy.get(`#id_gender${genderId}`).check();
  }

  fillRegistrationPasswordField(password) {
    cy.get('#password').type(password);
  }

  fillDateOfBirth(day, month, year) {
    cy.get('#days').select(day);
    cy.get('#months').select(month);
    cy.get('#years').select(year);
  }

  fillUserInfo(user) {
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zip);
    cy.get('#mobile_number').type(user.phone);
  }

  submit(buttonId) {
    cy.get(`button[data-qa='${buttonId}']`).click();
  }
  clickContinue(continuebuttonId){
  cy.get(`a[data-qa='${continuebuttonId}']`).click();
}
}

export default SignupPage;
