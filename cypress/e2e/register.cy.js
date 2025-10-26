describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.contains('a', 'Signup / Login').click()
  })

  it('Test Case 1: Register User', () => {
    let randomUserComplement = new Date().getTime()

    cy.contains('h2', 'New User Signup!').should('be.visible')
    cy.get('[data-qa=signup-name]').type(`Cypress_${randomUserComplement}`)
    cy.get('[data-qa=signup-email]').type(`cypress${randomUserComplement}@test.com`)
    cy.contains('button', 'Signup').click()

    cy.contains('.title', 'Enter Account Information').should('be.visible')
    cy.get('[data-qa=title] [value=Mr]').check()
    cy.get('[data-qa=password]').type('123456')
    cy.get('[data-qa=first_name]').type('Cypress')
    cy.get('[data-qa=last_name]').type('Test')
    cy.get('[data-qa=address]').type('Miami Street, 123')
    cy.get('[data-qa=country]').select('United States')
    cy.get('[data-qa=state]').type('California')
    cy.get('[data-qa=city]').type('Miami')
    cy.get('[data-qa=zipcode]').type('0544-651')
    cy.get('[data-qa=mobile_number]').type('1234567890')

    cy.contains('button', 'Create Account').click()

    cy.contains('.title', 'Account Created!').should('be.visible')
    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
  })

  it('Test Case 5: Register User with existing email', () => {
    cy.contains('h2', 'New User Signup!').should('be.visible')
    cy.get('[data-qa=signup-name]').type('pgats-user777')
    cy.get('[data-qa=signup-email]').type('pgats-user@email.com')
    cy.contains('button', 'Signup').click()

    cy.contains('Email Address already exist!').should('be.visible')
  })

})