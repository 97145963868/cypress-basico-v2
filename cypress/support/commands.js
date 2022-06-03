Cypress.Commands.add('fillMandatoryFieldsandSubmit', function(nome,sobrenome,email,area) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(area)  //cy.get('button[type="submit"]').click()
    cy.contains('button','Enviar').click()
})

Cypress.Commands.add('erroEmailFormatoInvalido', function(nome,sobrenome,email,area) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(area)  //cy.get('button[type="submit"]').click()
    cy.contains('button','Enviar').click()
})

Cypress.Commands.add('verificaTelefoneVazioNaoNumerico', function(nome,sobrenome,email,area,fone) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(area)  //cy.get('button[type="submit"]').click()
    cy.get('#phone')
      .type('abcdefhhi')
    cy.contains('button','Enviar').click()
})

Cypress.Commands.add('foneObrigatorioNaoPreenchido', function(nome,sobrenome,email,area) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type(area)
    cy.contains('button','Enviar').click()
})

Cypress.Commands.add('preencheElimpaCampos', function(nome,sobrenome,email,fone) {
    cy.get('#firstName')
    .type(nome)
    .should('have.value', nome)
    .clear()
    .should('have.value', '')
  cy.get('#lastName')
    .type(sobrenome)
    .should('have.value', sobrenome)
    .clear()
    .should('have.value', '')
  cy.get('#email')
    .type(email)
    .should('have.value', email)
    .clear()
    .should('have.value', '')
  cy.get('#phone')
    .type(fone)
    .should('have.value', fone)
    .clear()
    .should('have.value', '')
  cy.contains('button','Enviar').click()
})


Cypress.Commands.add('selecionaProdutoYOUTUBEpeloTexto', function(nome,sobrenome,email,area,produto,texto) {          
        cy.get('#firstName').type(nome)
        cy.get('#lastName').type(sobrenome)
        cy.get('#email').type(email)
        cy.get('#product').select(texto).should('have.value', produto)
        cy.get('#open-text-area').type(area)
        cy.contains('button','Enviar').click()

})

Cypress.Commands.add('selecionaProdutoMENTORIApeloValor', function(nome,sobrenome,email,area,produto) {          
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#product')
    .select(produto)
    .should('have.value', produto)
    cy.get('#open-text-area').type(area)
    cy.contains('button','Enviar').click()

})

Cypress.Commands.add('selecionaProdutoBLOGpeloIndice', function(nome,sobrenome,email,area,produto) {          
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#product')
      .select(produto)
      .should('have.value', 'blog')
    cy.get('#open-text-area').type(area)
    cy.contains('button','Enviar').click()

})

Cypress.Commands.add('marcarTipoAtendimentoFeedback', function(nome,sobrenome,email,area,tpAtendimento) {          
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value', tpAtendimento)
    cy.get('#open-text-area').type(area)
    cy.contains('button','Enviar').click()

})

Cypress.Commands.add('marcarCadaTipoAtendimento', function(nome,sobrenome,email,area) {          
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })
    cy.get('#open-text-area').type(area)
    cy.contains('button','Enviar').click()
})

Cypress.Commands.add('marcarAmbosDesmarcarUltimo', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .last()
  .uncheck()
  .should('not.be.checked')
  cy.get('#open-text-area').type(area)
  cy.contains('button','Enviar').click()
})

Cypress.Commands.add('SelecionarArquivoPastaFixtures', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('#open-text-area').type(area)
  cy.get('input[type="file"]#file-upload')
  .should('not.have.value')
  .selectFile('./cypress/fixtures/example.json')
  .should(function($input) {
    console.log($input)
    expect($input[0].files[0].name).to.equal('example.json')
  })

  cy.contains('button','Enviar').click()
})

Cypress.Commands.add('SelecionarArquivoDragDrop', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('#open-text-area').type(area)
  cy.get('input[type="file"]#file-upload')
  .should('not.have.value')
  .selectFile('./cypress/fixtures/example.json',{action: 'drag-drop'})
  .should(function($input) {
    console.log($input)
    expect($input[0].files[0].name).to.equal('example.json')
  })

  cy.contains('button','Enviar').click()
})

Cypress.Commands.add('SelecionarArquivoFixtureAlias', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('#open-text-area').type(area)
  cy.fixture('example.json').as('sampleFile')
  cy.get('input[type="file"]#file-upload')
  .selectFile('@sampleFile')
  .should(function($input) {
    expect($input[0].files[0].name).to.equal('example.json')
  })
  cy.contains('button','Enviar').click()
})

Cypress.Commands.add('abrirPoliticaPrivacidadeOutraAbaSemClick', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('#open-text-area').type(area)
  cy.get('#privacy a').should('have.attr','target','_blank')
  cy.contains('button','Enviar').click()
})

Cypress.Commands.add('abrirPoliticaPrivacidadeOutraAbaSemTargetComClick', function(nome,sobrenome,email,area) {          
  cy.get('#firstName').type(nome)
  cy.get('#lastName').type(sobrenome)
  cy.get('#email').type(email)
  cy.get('#open-text-area').type(area)
  cy.get('#privacy a')
  .invoke('removeAttr','target')
  .click()
  cy.contains('Talking About Testing').should('be.visible')
})


