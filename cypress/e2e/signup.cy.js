describe('launch deel app', ()=>{

  it('sign up for a new user', ()=>{

      //open the deel application
      cy.visit('https://dev.deel.wtf/login');
      cy.contains('Log in')
      cy.url().should('include','/login')

      //passing username and password and loggin in
      cy.get('input[name="email"]').type('rohith.vasudevan07@gmail.com')
      cy.get('input[name="password"]').type('Neymar@2019')
      cy.get('button[type="submit"]').click()
      cy.get('.deel-ui__typography__heading_1', {timeout:20000}).should('contain', 'Rohith')

      //creating a fixed rate contract
      cy.get('.mobile-header-content-container > .button').click()
      cy.get('[href="/create"] > .deel-ui__stack').click()
      cy.get('.deel-ui__typography__heading_1', {timeout:10000}).should('contain', 'Contract Type')
      cy.get(':nth-child(1) > .anchor > .box > [style="gap: 24px;"]').click()
      cy.get('h2.mb-10', {timeout:10000}).should('contain', 'Creating a fixed contract')

      //fill in details for the contract
      cy.get('input[name="name"]').type('test3')
      cy.get('.box > :nth-child(1) > .deel-ui__stack > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').click()
      cy.get('#react-select-2-option-1-2').click()
      cy.get(':nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container').click()
      cy.get('#react-select-4-option-5 > .deel-ui__select__option-container').click()
      cy.get('input[name="jobTitle"]').type('3D Artist')
      cy.get('textarea[name="scope"]').type('test')
      cy.get('.deel-ui__stack_horizontal > .button').click()

      //create contract currency page and fill in details till submission
      cy.get('.space-btwn > .text-left', {timeout:8000}).should('contain', 'Define payment rate')
      cy.get('.deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control').click()
      cy.get('.font-12').click()
      cy.get('.deel-ui__input-component__input').type('1000')
      cy.get(':nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control').click()
      cy.get('#react-select-6-option-0 > .deel-ui__select__option-container').click()
      cy.get('.mt-9 > div').click()
      cy.get('.medium', {timeout:10000}).should('contain', 'First payment')
      cy.get('.submit-define-dates').click()
      cy.get('.contract-creation-footer > .mt-7').click()
      cy.get('.contract-creation-footer > .mt-7 > div').click()
      cy.get('.deel-ui__typography__heading_1', {timeout:10000}).should('contain', 'test3')

  })
  
});