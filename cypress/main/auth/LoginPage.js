class LoginPage {
  emailInput = 'input[name="correo"]';
  passwordInput = 'input[name="contraseña"]';
  submitButton = 'button[type="submit"]';

  visit() {
    cy.visit("/login");
  }

  fillCredentials(email, password) {
    cy.get(this.emailInput).clear().type(email);
    cy.get(this.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }
}

export const loginPage = new LoginPage();
