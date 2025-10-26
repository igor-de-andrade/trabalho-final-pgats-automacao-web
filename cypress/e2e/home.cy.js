import { faker } from '@faker-js/faker'

describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Test Case 10: Verify Subscription in home page', () => {
        const email = faker.internet.email()

        cy.get('input#susbscribe_email').type(email)

        cy.get('button#subscribe').click()

        cy.contains('You have been successfully subscribed!').should('be.visible')
    })


})