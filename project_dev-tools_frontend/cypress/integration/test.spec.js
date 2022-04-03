describe("Task Unit", () => {
    beforeEach(() => {
        cy.visit("http://159.223.32.22:8080/tasks");
    });
    it("Load Successfully", () => {
        cy.contains("Show").should("exist");
        cy.contains("Edit").should("exist");
        cy.contains("Delete").should("exist");
    });
    it("Show Test", () => {
        cy.contains("Show").click();
        cy.url().should("contains", "/");
    });
    it("Edit Test", () => {
        cy.contains("Edit").click();
        cy.url().should("contains", "/edit");
        cy.get('input[id="1"]').clear().type("2022-02-02");
        cy.get('input[id="2"]').clear().type("edit2");
        cy.get('input[id="3"]').clear().type("edit3");
        cy.get('input[id="4"]').clear().type("edit4");
        cy.get('input[id="5"]').clear().type("edit5");
        cy.contains("Submit").click();
    });
    it("Delete Test", () => {
        cy.contains("Delete").click();
        cy.on("window:confirm", (text) => {
            expect(text).to.contains("Are you sure?");
        });
    });
});

describe("New Unit", () => {
    beforeEach(() => {
        cy.visit("http://159.223.32.22:8080/tasks/new");
    });
    it("Load Successfully", () => {
        cy.contains("Submit").should("exist");
    });
    it("New Task Test", () => {
        cy.get('input[id="1"]').clear().type("2023-01-01");
        cy.get('input[id="2"]').type("test2");
        cy.get('input[id="3"]').type("test3");
        cy.get('input[id="4"]').type("test4");
        cy.get('input[id="5"]').type("test5");
        cy.contains("Submit").click();
    });
});

