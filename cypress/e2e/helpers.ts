export const mockLogin = () => {
  cy.clearCookies();
  cy.visit("/login");
  cy.get("#email").clear().type("mail.com");
  cy.get("#password").clear().type("aze");
  cy.get("#send").click();
};
