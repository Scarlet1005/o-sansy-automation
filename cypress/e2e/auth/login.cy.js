import { loginPage } from "../../main/auth/LoginPage";
import { randomEmail, randomPassword } from "../../utils/data-generator";

describe("Login Page Tests", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Debe mostrar error con credenciales inválidas", () => {
    const email = randomEmail();
    const password = randomPassword();

    loginPage.fillCredentials(email, password);
    loginPage.submit();

    cy.get('input[name="contraseña"]').should("have.class", "input-error");
  });

  it("Debe mostrar error si los campos están vacíos", () => {
    loginPage.submit();

    cy.contains("El correo es obligatorio.").should("be.visible");
    cy.contains("La contraseña es obligatoria.").should("be.visible");
  });

  it("Debe permitir login con credenciales válidas", () => {
    const email = Cypress.env("USER_EMAIL");
    const password = Cypress.env("USER_PASSWORD");

    loginPage.fillCredentials(email, password);
    loginPage.submit();

    cy.url().should("include", "/inicio-admin");
    cy.contains("Panel de Administración").should("be.visible");
  });
});
