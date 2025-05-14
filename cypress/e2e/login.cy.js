describe('Login User',()=>{
let user;

before(()=>{
  cy.fixture('user').then((data) => {
    user = data;
  });
})

it('login user sucessfully',()=>{

  cy.login(user.email,user.password);

  //to verify userlogin
  cy.get('a[href="/logout"]').should('be.visible');  
});
});
