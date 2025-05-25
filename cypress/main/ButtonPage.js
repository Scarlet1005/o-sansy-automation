class ButtonPage {
  cancelButton = "button.btn-cancelar";
  createButton = "button.btn-crear";
  deleteButton = "button.btn-eliminar";

  clickCancel() {
    cy.get(this.cancelButton).click();
  }

  clickCreate() {
    cy.get(this.createButton).click();
  }

  clickDelete() {
    cy.get(this.deleteButton).click();
  }
}

export const buttonPage = new ButtonPage();
