describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("https://localhost:1234");
    })

    const textInput = () => cy.get('input[name=text');
    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]')
    const roleInput = () => cy.get('select').select(["Web Developer", "Software Engineer",
    "Software Developer", "Front End Developer", "Network Engineer", "Full Stack Developer"])

})