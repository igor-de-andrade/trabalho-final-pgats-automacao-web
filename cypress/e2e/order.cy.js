describe('Order', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  })

  it('Test Case 15: Place Order: Register before Checkout', () => {
    cy.contains('a', 'Signup / Login').click()

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

    cy.contains('a', 'Continue').click()
    cy.contains('Logged in as Cypress').should('be.visible')

    cy.contains('.productinfo', 'Winter Top')
        .parent()
        .find('a', 'add-to-cart')
        .first()
        .click()
    
    cy.contains('a', 'View Cart').click()

    cy.contains('a', 'Proceed To Checkout').click()

    cy.contains('h2', 'Review Your Order').should('be.visible')
    cy.contains('Total Amount')
        .closest('tr')
        .find('.cart_total_price')
        .should('have.text', 'Rs. 600')

    cy.get('textarea[name=message]').type('Please deliver between 9 AM to 5 PM.')
    cy.contains('a', 'Place Order').click()

    cy.url().should('include', '/payment')

    cy.get('input[data-qa=name-on-card]').type('Cypress Test')
    cy.get('input[data-qa=card-number]').type('4111111111111111')
    cy.get('input[data-qa=cvc]').type('123')
    cy.get('input[data-qa=expiry-month]').type('12')
    cy.get('input[data-qa=expiry-year]').type('2025')
    cy.contains('button', 'Pay and Confirm Order').click()

    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  })


})