describe('Schedule Details Testing', () => {

    it('ScheduleDetails Negative Test', () => {
        // Enter code here
    })

    it('ScheduleDetails Postive Testing', () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin")
        cy.get('#password').focus().type('admin1')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')

        cy.get('div[onclick="openProDetails(29)"]').click()

        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Details?id=29')

        // entering schedule details

        cy.get('#SheduleDetailedTab').click()

        cy.get('#sdDate').focus().type('2024-01-01')
        cy.get('#sdStartTime').focus().type('05:00 AM')

    })

})