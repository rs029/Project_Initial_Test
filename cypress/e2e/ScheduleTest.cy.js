describe('Schedule Testing', () => {

    it('Schedule Negative Testing', () => {
        //Enter code here
    })

    it('Schedule Positive Testing', () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin")
        cy.get('#password').focus().type('admin1')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')      


        cy.get('div[onclick="openProDetails(29)"]').click()

        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Details?id=29')

        cy.get('#SheduleTab').click()

        cy.get('#sDate').focus().type('2024-01-02')
        cy.get('#sDetails').focus().type("Long Hair")
        cy.get('#sRemarks').focus().type('Beautiful')

        let enteredDate, enteredDetails, enteredRemarks;
        cy.get('#sDate').invoke('val').then((val) => {
            enteredDate = val
        })
        cy.get('#sDetails').invoke('val').then((val) => {
            enteredDetails = val
        })
        cy.get('#sRemarks').invoke('val').then((val) => {
            enteredRemarks = val
        })

        cy.get('#addShedule').click()


        // Checking value in table below

        cy.get('table tbody tr').each(($row, index) => {
            if(index === 1){
                cy.wrap($row)
                .find('td')
                .should('have.length', 6)
                .eq(0)
                .should('contain.text', 'Day 2')
                cy.wrap($row)
                .find('td')
                .eq(1)
                .should('contain.text', '02 JAN, 2024')
                cy.wrap($row)
                .find('td')
                .eq(2)
                .should('contain.text', 'TUESDAY')
                cy.wrap($row)
                .find('td')
                .eq(3)
                .should('contain', enteredDetails)
                cy.wrap($row)
                .find('td')
                .eq(4)
                .should('contain', enteredRemarks)
            }
        })

    })
})