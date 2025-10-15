class CreateProjectPage
{   clickCreateProject() {
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiPaper-root > .MuiCardContent-root', { timeout: 10000 }).click();
    }

}
export default CreateProjectPage;