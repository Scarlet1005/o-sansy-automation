class NavbarPage {
  areasMenu = ":nth-child(2) > .menu-item";
  callsMenu = ":nth-child(3) > .menu-item";
  usersMenu = ":nth-child(4) > .menu-item";

  clickAreasMenu() {
    cy.get(this.areasMenu).click();
  }

  clickCallsMenu() {
    cy.get(this.callsMenu).click();
  }

  clickUsersMenu() {
    cy.get(this.usersMenu).click();
  }

  isVisible() {
    cy.get(this.areasMenu).should("be.visible");
    cy.get(this.callsMenu).should("be.visible");
    cy.get(this.usersMenu).should("be.visible");
  }
}

export const navbarPage = new NavbarPage();
