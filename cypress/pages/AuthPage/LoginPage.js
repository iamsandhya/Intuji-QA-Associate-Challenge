class LoginPage{
  visit(){
    cy.visit('/login');
  }
  fillupEmail(email){
    cy.get("input[data-qa='login-email']").type(email);

  }
  fillupPassword(password){
    cy.get("input[data-qa='login-password']").type(password);
  }
  submit(buttonId){
    cy.get(`button[data-qa='${buttonId}']`).click();
  }
}
export default LoginPage;