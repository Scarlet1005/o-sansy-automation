import { loginPage } from '../../main/auth/LoginPage';
import { navbarPage } from '../../main/menu/NavbarPage';
import { convocatoriaPage } from '../../main/convocatoria/convocatoriaCreate';

describe('Creación de convocatoria después del login', () => {
    beforeEach(() => {
        // Iniciar sesión
        loginPage.visit();
        loginPage.fillCredentials(
            Cypress.env("USER_EMAIL"),
            Cypress.env("USER_PASSWORD")
        );
        loginPage.submit();

        // Esperar a que cargue la vista de admin
        cy.url().should('include', '/inicio-admin');

        // Ir al módulo de convocatorias desde el navbar
        navbarPage.clickCallsMenu();

        // Verificar que redirige a la página de convocatorias
        cy.url().should('include', '/convocatorias'); // Ajusta si es otra ruta
    });

    it('Debe abrir el modal y crear convocatoria', () => {
        // Usar fixture
        cy.fixture('convocatorias').then((datos) => {
            const data = datos[0];

            expect(data.nombre).to.exist;
            expect(data.descripcion).to.exist;

            convocatoriaPage.clickCrearConvocatoriaBtn();
            cy.get('form.modal-form').should('be.visible');
            convocatoriaPage.llenarFormulario(data);
            convocatoriaPage.enviarFormulario();
            convocatoriaPage.verificarExito();
        });
    });
});
