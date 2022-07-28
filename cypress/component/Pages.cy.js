import ConnexionPage from "../../client/src/Pages/ConnexionPage";
import InscriptionPage from "../../client/src/Pages/InscriptionPage";
import HomePage from "../../client/src/Pages/HomePage";
import ProjetCreationPage from "../../client/src/Pages/ProjetCreationPage";
import ProjectListPage from "../../client/src/Pages/ProjectListPage";
import ProjetDetailsPage from "../../client/src/Pages/ProjetDetailsPage";
import TicketCreationPage from "../../client/src/Pages/TicketCreationPage";
import TicketListPage from "../../client/src/Pages/TicketListPage";
import TicketDetailPage from "../../client/src/Pages/TicketDetailPage";
import UserListPage from "../../client/src/Pages/UserListPage";
import UserParamsPage from "../../client/src/Pages/UserParamsPage";

describe("Page rendering", () => {
  it("ConnexionPage", () => {
    cy.overMount(<ConnexionPage />);
  });
  it("InscriptionPage", () => {
    cy.overMount(<InscriptionPage />);
  });
  it("Home Page", () => {
    cy.overMount(<HomePage />);
  });
  it("ProjetCreationPage", () => {
    cy.overMount(<ProjetCreationPage />);
  });
  it("ProjectListPage", () => {
    cy.overMount(<ProjectListPage />);
  });
  it("ProjetDetailsPage", () => {
    cy.overMount(<ProjetDetailsPage />);
  });
  it("TicketCreationPage", () => {
    cy.overMount(<TicketCreationPage />);
  });
  it("TicketListPage", () => {
    cy.overMount(<TicketListPage />);
  });
  it("TicketDetailPage", () => {
    cy.overMount(<TicketDetailPage />);
  });
  it("UserListPage", () => {
    cy.overMount(<UserListPage />);
  });
  it("UserParamsPage", () => {
    cy.overMount(<UserParamsPage />);
  });
});
