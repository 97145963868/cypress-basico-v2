/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o titulo da aplicação', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Envia formulário usando comando customizado',function(){
        cy.fillMandatoryFieldsandSubmit('Aloisio','Farias','aloisio.farias@gmail.com','teste')
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.erroEmailFormatoInvalido('Aloisio','Farias','aloisio.farias_gmail.com','teste')
        cy.get('.error').should('be.visible')

    })

    it('Campo telefone permanece vazio quando preenchido com valor não numérico',function(){
        cy.verificaTelefoneVazioNaoNumerico('Aloisio','Farias','aloisio.farias_gmail.com','teste','abcdefhhi')
        .should('have.value', '')
    })

    it('Msg erro - telefone se torna obrigatório mas não foi preenchido',function(){
      cy.foneObrigatorioNaoPreenchido('Aloisio','Farias','aloisio.farias@gmail.com','teste')
      cy.get('.error').should('be.visible')
    })

    it('Preenche e limpa os camos nome, sobrenome,email e telefone',function(){
      cy.preencheElimpaCampos('Aloisio','Farias','aloisio.farias@gmail.com','1234567890')           
    })

    it('Msg erro - Formulário sem campos obrigatórios preenchidos',function(){      
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('Selecionar produto YOUTUBE pelo texto',function(){
      cy.selecionaProdutoYOUTUBEpeloTexto('Aloisio','Farias','aloisio.farias@gmail.com','YOUTUBE SELECIONADO','youtube','YouTube')
    })

    it('Selecionar produto MENTORIA pelo valor (value) ',function(){
      cy.selecionaProdutoMENTORIApeloValor('Aloisio','Farias','aloisio.farias@gmail.com','MENTORIA SELECIONADO','mentoria')
    })

    it('Selecionar produto BLOG pelo indice (indice 1) ',function(){
      cy.selecionaProdutoBLOGpeloIndice('Aloisio','Farias','aloisio.farias@gmail.com','BLOG SELECIONADO', 1)        
    })

    it('Marcar o tipo de atendimento - Feedback',function(){
      cy.marcarTipoAtendimentoFeedback('Aloisio','Farias','aloisio.farias@gmail.com','TIPO DE ATENDIMENTO É FEEDBACK','feedback')        
    })

    it('Marcar cada tipo de atendimento',function(){
      cy.marcarCadaTipoAtendimento('Aloisio','Farias','aloisio.farias@gmail.com','MARCANDO TODOS TIPOS DE ATENDIMENTO')                
    })

    it('Marcar ambos checkbox e desmarcar o ultimo',function(){
      cy.marcarAmbosDesmarcarUltimo('Aloisio','Farias','aloisio.farias@gmail.com','Marcar ambos checkbox e desmarcar o ultimo')                
    })

    it('Seleciona arquivo da pasta fixtures',function(){
      cy.SelecionarArquivoPastaFixtures('Aloisio','Farias','aloisio.farias@gmail.com','Seleciona arquivo da pasta fixtures')                
    })

    it('Seleciona arquivo simulando drag and drop',function(){
      cy.SelecionarArquivoDragDrop('Aloisio','Farias','aloisio.farias@gmail.com','Seleciona arquivo da pasta fixtures')                
    })

    it('Seleciona arquivo utilizando fixture a qual foi dado um alias',function(){
      cy.SelecionarArquivoFixtureAlias('Aloisio','Farias','aloisio.farias@gmail.com','Seleciona arquivo da pasta fixtures')                
    })

    it('Política de Privacidade abre em outra aba, sem click',function(){
      cy.abrirPoliticaPrivacidadeOutraAbaSemClick('Aloisio','Farias','aloisio.farias@gmail.com','Seleciona arquivo da pasta fixtures')                
    })

    it('Política de Privacidade abre em outra aba removendo target e clicando link',function(){
      cy.abrirPoliticaPrivacidadeOutraAbaSemTargetComClick('Aloisio','Farias','aloisio.farias@gmail.com','Seleciona arquivo da pasta fixtures')                
    })
})