describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('a', 'Products').click()
        cy.url().should('include', '/products')
        cy.contains('h2', 'All Products').should('be.visible')
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        cy.contains('.productinfo', 'Winter Top')
            .closest('.product-image-wrapper')
            .find('a[href*="/product_details/"]')
            .click()
        
        cy.contains('h2', 'Winter Top').should('be.visible')
        cy.contains('Rs. 600').should('be.visible')
        cy.contains('Brand: Mast & Harbour').should('be.visible')
    })

    it('Test Case 9: Search Product', () => {
        cy.get('input#search_product').type('Winter Top')
        cy.get('button#submit_search').click()
        cy.contains('h2', 'Searched Products').should('be.visible')
        cy.get('.productinfo').should('have.length', 1)
        cy.contains('.productinfo', 'Winter Top').should('be.visible')
        cy.contains('Rs. 600').should('be.visible')
    })


})