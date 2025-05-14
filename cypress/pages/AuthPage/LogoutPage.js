class LogOutPage{
  visit(){
    cy.visit('/');
  }

  logoutbutton(){
    cy.get('body').then(($body) => {
      if ($body.find('a[href="/logout"]').length > 0) {
        cy.get('a[href="/logout"]').should('be.visible').click();
        cy.log('User was logged in — successfully logged out.');
      } else {
        cy.log('No Logout button found — user is not logged in.');
      }
    });
  }
}


export default LogOutPage;