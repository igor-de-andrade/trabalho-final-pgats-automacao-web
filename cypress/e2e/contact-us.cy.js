import { faker } from '@faker-js/faker'

describe('Contact Us', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('a', 'Contact us').click()
    cy.url().should('include', '/contact_us')
    cy.contains('h2', 'Get In Touch').should('be.visible')
  })

  it('Test Case 6: Contact Us Form', () => {
    const form = {
        name: faker.internet.username(),
        email: faker.internet.email(),
        subject: faker.word.words(5),
        message: faker.lorem.paragraph(5)
    }

    cy.get('input[data-qa=name]').type(form.name)
    cy.get('input[data-qa=email]').type(form.email)
    cy.get('input[data-qa=subject]').type(form.subject)
    cy.get('textarea[data-qa=message]').type(form.message, { delay: 0 })

    cy.get('input[name=upload_file]').selectFile('cypress/fixtures/contact-us/image.png')

    cy.get('[data-qa=submit-button]').click()

    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    cy.contains('a', 'Home').click()
    cy.url().should('eq', 'https://automationexercise.com/')
  })


})