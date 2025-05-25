import { areaCreatePage } from "../../main/areas/AreaCreatePage";
import { areasListPage } from "../../main/areas/AreasListPage";
import { loginPage } from "../../main/auth/LoginPage";
import { buttonPage } from "../../main/ButtonPage";
import { navbarPage } from "../../main/menu/NavbarPage";
import { randomAreaCost, randomAreaDescription, randomNameArea,} from "../../utils/data-generator";

describe("Pruebas de eliminar área", () => {
  let areaName;
  let description;
  let price;

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
    areasListPage.isAreaVisible(areaName);
    areasListPage.isAreaDescriptionVisible(areaName, description);
    areasListPage.isAreaCostVisible(areaName, price);
  });

  it("Debe eliminar un área existente", () => {
    areasListPage.clickDeleteArea(areaName);
    buttonPage.clickDelete();
    areasListPage.getAreaCard(areaName).should("not.exist");
  });

  it("Debe cancelar la eliminación de un área existente", () => {
    areasListPage.clickDeleteArea(areaName);
    buttonPage.clickCancel();
    areasListPage.isAreaVisible(areaName);
    areasListPage.isAreaDescriptionVisible(areaName, description);
    areasListPage.isAreaCostVisible(areaName, price);
  });

  after(() => {
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
