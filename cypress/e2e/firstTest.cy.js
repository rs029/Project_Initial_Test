describe("Neem_Tree_Inital_Testing", () => {

    it("Login_Page_Negative_Test", () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin1")
        cy.get('#password').focus().type('admin12442')
        cy.get('#submit').click()
        // cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')
        cy.get('.myalert').should('be.visible')

    })

    it("Login_Page_Positive_Test", () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin")
        cy.get('#password').focus().type('admin1')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')

        // After successful login - let's get inside the project section
        
        cy.get('#Project').click({waitForAnimations: false})
        // cy.wait(5000)
        // cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Index')
        cy.visit('https://dev.neem-tree.saitec.in/Project/Index')
        
        // Add new Project

        cy.get('#AddnewProject').click({waitForAnimations: false})
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Details')

        // Make a new Project
        const currentTime = new Date().toLocaleTimeString()

        cy.get('#projectName').focus().type(currentTime)
        cy.get('#FromDt').focus().type('2023-12-25')
        cy.get('#ToDt').focus().type('2023-12-31')
        // cy.visit('https://www.insider.com/sc/on-running-is-the-sportswear-brand-rethinking-sustainability')
        // cy.get('img[src="https://media-s3-us-east-1.ceros.com/business-insi…4141/outline.png?imageOpt=1&fit=bounds&width=1080"]').trigger('mousedown', {which: 1})
        // cy.trigger('mousemove').visit('https://dev.neem-tree.saitec.in/Project/Details')
        // cy.get('#dropContainer').trigger('mouseup', {force: true})
        cy.get('#submitProject').click()
        // cy.visit('https://dev.neem-tree.saitec.in/Project/Details?id=198')


        // creating some schedule

        cy.get('#SheduleTab').click()

        cy.get('#sDate').focus().type('2024-01-01')
        cy.get('#sDetails').focus().type('In Room')
        cy.get('#sRemarks').focus().type('Getting Focused')

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
            if(index === 0){
                cy.wrap($row)
                .find('td')
                .should('have.length', 6)
                .eq(0)
                .should('contain.text', 'Day 1')
                cy.wrap($row)
                .find('td')
                .eq(1)
                .should('contain.text', '01 JAN, 2024')
                cy.wrap($row)
                .find('td')
                .eq(2)
                .should('contain.text', 'MONDAY')
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

    it('Add New Project test', () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin")
        cy.get('#password').focus().type('admin1')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')
        
        // Adding a new project

        cy.get('#Project').click({waitForAnimations: false})
        // cy.wait(5000)
        // cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Index')
        cy.visit('https://dev.neem-tree.saitec.in/Project/Index')
        
        // Add new Project

        cy.get('#AddnewProject').click({waitForAnimations: false})
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Details')

        // Make a new Project
        const currentTime = new Date().toLocaleTimeString()

        cy.get('#projectName').focus().type(currentTime)
        cy.get('#FromDt').focus().type('2023-12-25')
        cy.get('#ToDt').focus().type('2023-12-31')
        // cy.visit('https://www.insider.com/sc/on-running-is-the-sportswear-brand-rethinking-sustainability')
        // cy.get('img[src="https://media-s3-us-east-1.ceros.com/business-insi…4141/outline.png?imageOpt=1&fit=bounds&width=1080"]').trigger('mousedown', {which: 1})
        // cy.trigger('mousemove').visit('https://dev.neem-tree.saitec.in/Project/Details')
        // cy.get('#dropContainer').trigger('mouseup', {force: true})
        cy.get('#submitProject').click()
        // cy.visit('https://dev.neem-tree.saitec.in/Project/Details?id=198')

    })

    it('Add Schedule to the Project test', () => {

        cy.visit("https://dev.neem-tree.saitec.in/Account/login")
        cy.get("#email").focus().type("admin")
        cy.get('#password').focus().type('admin1')
        cy.get('#submit').click()
        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Home/Dashboard')      


        cy.get('div[onclick="openProDetails(28)"]').click()

        cy.url().should('eq', 'https://dev.neem-tree.saitec.in/Project/Details?id=28')

        cy.get('#SheduleTab').click()

        cy.get('#sDate').focus().type('2024-01-02')
        cy.get('#sDetails').focus().type("adasd")
        cy.get('#sRemarks').focus().type('asccsa')

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