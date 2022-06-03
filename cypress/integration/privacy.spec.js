it('Testar Página Política de Privacidade de modo independente',function(){
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
})