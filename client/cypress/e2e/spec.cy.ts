// Helpers
function mockLogin() {
  cy.clearCookies();
  cy.visit('/login');
  cy.get('#email').clear().type('email@test.com');
  cy.get('#password').clear().type('pa$sWord');
  cy.get('#send').click();
}

// TESTS
describe('#Init', () => {
  it("Should go to '/' without crashing", () => {
    cy.visit('/');
  });
});

describe('#Register', () => {
  it('should create a new user', () => {
    cy.visit('/register');
    cy.get('#name').clear().type('TestName');
    cy.get('#email').clear().type('email@test.com');
    cy.get('#password').clear().type('pa$sWord');
    cy.get('#redopassword').clear().type('pa$sWord');
    cy.get('#send').click();
  });
  it('should not accept bad email', () => {
    //TODO:
  });
  it('should not accept empty fields on submission', () => {
    //TODO:
  });
});

describe('#Login', () => {
  it('should log and redirect to home page without crashing', () => {
    mockLogin();
    cy.url().should('include', '/');
  });
  it('should be able to reset password', () => {
    //TODO:
  });
});
