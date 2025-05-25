export class ConvocatoriaPage {
    modalCrearBtn = '[data-testid="btn-nueva-convocatoria"]';
    nombreInput = 'input[name="nombre"]';
    estadoSelect = 'select[name="id_estado_convocatoria"]';
    descripcionTextarea = 'textarea[name="descripcion"]';
    inscripcionInicio = 'input[name="inscripcionInicio"]';
    inscripcionFin = 'input[name="inscripcionFin"]';
    pagoInicio = 'input[name="pagoInicio"]';
    pagoFin = 'input[name="pagoFin"]';
    competenciaInicio = 'input[name="competenciaInicio"]';
    competenciaFin = 'input[name="competenciaFin"]';
    areasCheckbox = '.modal-areas input[type="checkbox"]';
    submitBtn = 'button[type="submit"]';

    clickCrearConvocatoriaBtn() {
        cy.get(this.modalCrearBtn).should('be.visible').click();
    }

    llenarFormulario(data) {
        cy.get(this.nombreInput).type(data.nombre);
        cy.get(this.estadoSelect).should('be.visible').select(data.estado);
        cy.get(this.descripcionTextarea).type(data.descripcion);

        // Establecer valores de fecha con invoke
        cy.get(this.inscripcionInicio).type(data.inscripcionInicio);
        cy.get(this.inscripcionFin).type(data.inscripcionFin);
        cy.get(this.pagoInicio).type(data.pagoInicio);
        cy.get(this.pagoFin).type(data.pagoFin);
        cy.get(this.competenciaInicio).type(data.competenciaInicio);
        cy.get(this.competenciaFin).type(data.competenciaFin);

        // Seleccionar al menos un área de competencia
        cy.get(this.areasCheckbox).first().check({ force: true });
    }

    enviarFormulario() {
        cy.get(this.submitBtn).click();
    }

    verificarExito() {
        cy.contains('Convocatoria creada correctamente');
    }
}

export const convocatoriaPage = new ConvocatoriaPage();
