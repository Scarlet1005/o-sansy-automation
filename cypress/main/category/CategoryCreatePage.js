class CategoryCreatePage {
  nameInput = '.modal-contenido :nth-child(1) > input[type="text"]';
  descriptionInput = ".modal-contenido textarea[maxlength]";
  areaSelect = ".modal-contenido span~select";
  gradosContainer = ".modal-contenido .grid-grados";

 
  typeName(name) {
    cy.get(this.nameInput).clear().type(name);
  }

  typeDescription(description) {
    cy.get(this.descriptionInput).clear().type(description);
  }

  selectArea(areaName) {
    cy.get(this.areaSelect).select(areaName);
  }

  selectGrades(gradosArray, nivel = "primario") {
    const index = nivel === "primario" ? 0 : 1;
    cy.get(this.gradosContainer)
      .eq(index)
      .within(() => {
        gradosArray.forEach((grado) => {
          cy.contains("button", grado).click();
        });
      });
  }
}

export const categoryCreatePage = new CategoryCreatePage();
