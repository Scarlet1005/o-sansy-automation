class AreasListPage {
  createAreaButton = "button.btn-nueva-area";

  getAreaCard(areaName) {
    return cy
      .get(".card-area")
      .filter(
        (_, el) =>
          el.querySelector(".card-header h3")?.textContent?.trim() === areaName
      );
  }

  isAreaVisible(areaName) {
    this.getAreaCard(areaName).should("exist").and("be.visible");
  }

  isAreaDescriptionVisible(areaName, description) {
    this.getAreaCard(areaName)
      .contains("p", description)
      .should("exist")
      .and("be.visible");
  }

  isAreaCostVisible(areaName, cost) {
    this.getAreaCard(areaName)
      .contains("p.area-costo", `Costo: ${cost} Bs`)
      .should("exist")
      .and("be.visible");
  }

  clickEditArea(areaName) {
    this.getAreaCard(areaName).find(".card-actions button").first().click();
  }

  clickDeleteArea(areaName) {
    this.getAreaCard(areaName).find(".card-actions button").eq(1).click();
  }

  clickCreateArea() {
    cy.get(this.createAreaButton).click();
  }

  clickAddCategory(areaName) {
    this.getAreaCard(areaName).find(".btn-categoria").click();
  }

  isCategoryVisible(areaName, categoryNames) {
    const categories = Array.isArray(categoryNames)
      ? categoryNames
      : [categoryNames];

    this.getAreaCard(areaName).within(() => {
      categories.forEach((category) => {
        cy.get(".categorias-box strong").should("contain.text", category);
      });
    });
  }

  clickEditCategory(areaName, categoryName) {
    this.getAreaCard(areaName).within(() => {
      cy.contains(".categorias-box strong", categoryName)
        .siblings("div")
        .find("button")
        .first()
        .click();
    });
  }

  clickDeleteCategory(areaName, categoryName) {
    this.getAreaCard(areaName).within(() => {
      cy.contains(".categorias-box strong", categoryName)
        .siblings("div")
        .find("button")
        .eq(1)
        .click();
    });
  }


}

export const areasListPage = new AreasListPage();
