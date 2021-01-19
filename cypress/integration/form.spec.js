
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Verify Format Button returns correct value", () => {
    it("Money Formatter Home Page", () => {
        
        
        //arrange
        cy.visit("/");
        cy.get('.format').click()
        cy.get('input[name="money-amount"]')
        .type("1000")
        .should("have.value", "1000");
        
        //action
        cy.get('button[id="format"]').click()


        //assert
        cy.get('label[id="lbltipAddedComment"]')
        .should("have.value", "$1,000.00");

/*
        Mutation Tests
        A broken link to the money formatting page would fail the cypress UI test
        
        Performance tests would be focussed on the formatting function
        - volume tests would be based on typical usage scenarios throughout the working day
*/
      });
  });