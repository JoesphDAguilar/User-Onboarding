describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("https://localhost:1234");
    })

    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]');
    const roleInput = () => cy.get('select').select(["Web Developer", "Software Engineer",
    "Software Developer", "Front End Developer", "Network Engineer", "Full Stack Developer"]);
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password');
    const tosCheckBox= () => cy.get('input[type="checkbox"')
    const submitButton = () => cy.get('button[id="submitButton"');
    const hackSysButton = () => cy.get('button[od="hackButton');

    it('Sanity check to make sure test are working', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.equal({});
    })

    it('The proper elements are showing', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        roleInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosCheckBox().should('be.checked');
        submitButton().should('exist');
        hackSysButton().should('not.exist');

        cy.contains("Submit").should('exist');
        cy.contains(/submit/i).should('exist');
    })

    describe("Filling out the inputs", () => {

        it("Can navigate to the site", () => {
            cy.url().should('include', 'localhost');
        })

        it("Submit button starts out disabled", () => {
            submitButton().should('be.disabled');
        })

        it("Can type in the inputs", () => {
            firstNameInput()
                .should('have.value', '')
                .type('John')
                .should("have.value", "John");
            
            lastNameInput()
                .should('have.value', '')
                .type('Doe')
                .should('have.value', 'Doe');

            roleInput()
                .should('have.text', '')
                .select("Full Stack Developer")
                .should('have.text', ["Web Developer", "Software Engineer",
                "Software Developer", "Front End Developer", "Network Engineer", 
                "Full Stack Developer"]);

            emailInput()
                .should('have.value', '')
                .type('johdoe@aol.com')
                .should('johdoe@aol.com');
            
            passwordInput()
                .should('have.value', '')
                .type('abcd1234')
                .should('have.value', 'abcd1234');

            tosCheckBox()
                .should('be.checked')
        })

        it('The submit button enables when both inputs are filled out', () => {
            firstNameInput().type('John');
            lastNameInput().type('Doe');
            roleInput().select("Full Stack Developer");
            emailInput().type('johndoe@aol.com');
            passwordInput().type('abcd1234');
            tosCheckBox().check(true);
            submitButton().should('not.be.disabled');
        })


    })

})