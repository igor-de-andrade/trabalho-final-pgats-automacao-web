describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.contains('a', 'Signup / Login').click()
  })

  it('Test Case 2: Login User with correct email and password', () => {
    cy.contains('h2', 'Login to your account').should('be.visible')
    cy.get('[data-qa=login-email]').type('pgats-user@email.com')
    cy.get('[data-qa=login-password]').type('123456')
    cy.contains('button', 'Login').click()

    cy.contains('Logged in as pgats-user777').should('be.visible')
    cy.contains('a', 'Logout').should('be.visible')
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.contains('h2', 'Login to your account').should('be.visible')
    cy.get('[data-qa=login-email]').type('pgats-user@email.com')
    cy.get('[data-qa=login-password]').type('1234567')
    cy.contains('button', 'Login').click()

    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it('Test Case 4: Logout User', () => {
    cy.contains('h2', 'Login to your account').should('be.visible')
    cy.get('[data-qa=login-email]').type('pgats-user@email.com')
    cy.get('[data-qa=login-password]').type('123456')
    cy.contains('button', 'Login').click()

    cy.contains('Logged in as pgats-user777').should('be.visible')
    
    cy.contains('a', 'Logout').click()
    cy.contains('a', 'Signup / Login').should('be.visible')
  })

})