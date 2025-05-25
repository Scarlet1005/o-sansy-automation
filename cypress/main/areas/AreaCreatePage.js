class AreaCreatePage {
  nameInput = '.modal-contenido :nth-child(1) > input[type="text"]';
  descriptionInput = ".modal-contenido textarea[maxlength]";
  costInput = '.modal-contenido :nth-child(3) > input[type="text"]';

  fillForm({ name, description, cost }) {
    cy.get(this.nameInput).clear().type(name);
    cy.get(this.descriptionInput).clear().type(description);
    cy.get(this.costInput).clear().type(cost);
  }
}

export const areaCreatePage = new AreaCreatePage();
