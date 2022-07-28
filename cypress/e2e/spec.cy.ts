import { mockLogin } from "./helpers";

/*

TODO:   Refaire tout le truc au niveau root au lieu de client

afin de pouvoir mocker la base et enfin faire fonctionner les beforeEach

pour faire de vrai test E2E

*/

describe("#Init", () => {
  it("Should go to '/' without crashing", () => {
    cy.visit("/");
  });
});

// describe('#Register', () => {
//   it('should create a new user', () => {
//     cy.visit('/register');
//     cy.get('#name').clear().type('TestName');
//     cy.get('#email').clear().type('email@test.com');
//     cy.get('#password').clear().type('pa$sWord');
//     cy.get('#redopassword').clear().type('pa$sWord');
//     cy.get('#send').click();
//   });
// });

describe("#Login", () => {
  it("should log and redirect to home page without crashing", () => {
    mockLogin();
    cy.url().should("include", "/");
  });
});

describe("#UseCase: Navigate", () => {
  beforeEach(() => {
    mockLogin();
  });
  it("should properly navigate", () => {
    cy.get("#goProjects").click();
    cy.url().should("include", "/projetList");
    cy.get("#goLogin").click();
    cy.url().should("include", "/login");
    cy.get("#goRegister").click();
    cy.url().should("include", "/register");
    cy.get("#goHome").click();
    cy.url().should("include", "/");
    cy.get("#goUserParams").click();
    cy.url().should("include", "/userparam");
  });
});

describe("#UseCase: Create Project", () => {
  it("should properly create a project", () => {
    mockLogin();
    cy.visit("/projetCreation");
    cy.get("#projName").type("TestProject");
    cy.get("#projMembers").select("User2");
  });
});
