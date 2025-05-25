import { areaCreatePage } from "../../main/areas/AreaCreatePage";
import { areasListPage } from "../../main/areas/AreasListPage";
import { loginPage } from "../../main/auth/LoginPage";
import { buttonPage } from "../../main/ButtonPage";
import { navbarPage } from "../../main/menu/NavbarPage";
import { categoryCreatePage } from "./../../main/category/CategoryCreatePage";
import {
  randomAreaCost,
  randomAreaDescription,
  randomCategory,
  randomNameArea,
} from "../../utils/data-generator";

describe("Pruebas de categorias", () => {
  let areaName;
  let description;
  let price;
  let categoryName;
  let newDescription;

  beforeEach(() => {
    areaName = randomNameArea();
    description = randomAreaDescription();
    price = randomAreaCost();

    loginPage.visit();
    loginPage.fillCredentials(
      Cypress.env("USER_EMAIL"),
      Cypress.env("USER_PASSWORD")
    );
    loginPage.submit();
    cy.url().should("include", "/inicio-admin");
    navbarPage.clickAreasMenu();

    areasListPage.clickCreateArea();
    areaCreatePage.fillForm({
      name: areaName,
      description: description,
      cost: price,
    });
    buttonPage.clickCreate();

    cy.wait(1000);
  });

  it("Agrega y elimina una categoría de un área", () => {
    categoryName = randomCategory();
    newDescription = randomAreaDescription();

    areasListPage.clickAddCategory(areaName);

    categoryCreatePage.typeName(categoryName);
    categoryCreatePage.typeDescription(newDescription);
    categoryCreatePage.selectGrades(["3º", "4º"], "primario");
    categoryCreatePage.selectGrades(["5º"], "secundario");

    buttonPage.clickCreate();

    cy.wait(1000); 

    areasListPage.isCategoryVisible(areaName, categoryName);
    areasListPage.clickDeleteCategory(areaName, categoryName);
    buttonPage.clickCreate();

    cy.wait(1000); 
  });

  afterEach(() => {
    loginPage.visit();
    loginPage.fillCredentials(
      Cypress.env("USER_EMAIL"),
      Cypress.env("USER_PASSWORD")
    );
    loginPage.submit();
    cy.url().should("include", "/inicio-admin");
    navbarPage.clickAreasMenu();

    areasListPage.getAreaCard(areaName).then(($el) => {
      if ($el.length) {
        areasListPage.clickDeleteArea(areaName);
        buttonPage.clickDelete();
      }
    });
  });
});
