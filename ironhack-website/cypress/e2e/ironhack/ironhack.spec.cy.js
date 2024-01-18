describe('Ironhack Website', () => {
  it("Can Access https://ironhack.com", () => {
    cy.visit("https://ironhack.com");
    cy.url().should("eq", "https://www.ironhack.com/");
  }),
  it ("Can Select the Portuguese Option", ()=>{
    cy.visit("https://ironhack.com");
    cy.get("select#field-\\:Rdammb5sta\\:").select("Portugal");
  }),

  it("Can Access to Ironhack's Portuguese Website", ()=>{
    cy.visit("https://ironhack.com");
    cy.get("select#field-\\:Rdammb5sta\\:").select("Portugal");
    cy.get(".css-116qt7e > .chakra-button").click();
    cy.url().should("eq", "https://www.ironhack.com/pt");
  }), 

  it("Title should equal to 'O teu futuro começa aqui!'", ()=>{
    cy.visit("https://www.ironhack.com/pt");
    cy.get(".css-10x6ov5")
      .invoke("text")
      .should("eq", "O teu futuro começa aqui!");
  });
})