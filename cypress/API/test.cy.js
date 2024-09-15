describe('API Testing', () => {
    //Test the retrieval of a list of users and validate the structure and content of the response.
    it('List Users', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/users"
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test the retrieval of a single user by ID.
    it('Single User', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/users/2"
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test retrieving a user with an invalid ID to ensure proper error handling.You will configure Cypress to not fail the test on 404 status codes by setting
    it('Single User Not Found', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/users/23",
            failOnStatusCode:false
        }).then(response=>{
            expect(response.status).to.eq(404)
        })
    });
    //Test the retrieval of a list of resources (e.g., colours, products).
    it('List Resource ', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/unknown"
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test the retrieval of a single resource by ID.
    it('Single Resource ', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/unknown/2"
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test retrieving a resource with an invalid ID to ensure proper error handling You will configure Cypress to not fail the test on 404 status codes by setting
    it('Single Resource Not Found', () => {
        cy.request({
            method:`GET`,
            url:"https://reqres.in/api/unknown/23",
            failOnStatusCode:false
        }).then(response=>{
            expect(response.status).to.eq(404)
        })
    });
    //Test creating a new user using a POST request and ensure the user is added correctly.
    it('Create User', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(response=>{
            expect(response.status).to.eq(201)
        })
    });
    //Test updating a user's data using a PUT request (full update).
    it('Update User PUT', () => {
        cy.request({
            method:`PUT`,
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test updating a user using a PATCH request (partial update).
    it('Update User PATCH', () => {
        cy.request({
            method:`PATCH`,
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test deleting a user by ID.
    it('Delete User', () => {
        cy.request({
            method:`DELETE`,
            url:"https://reqres.in/api/users/2",
        }).then(response=>{
            expect(response.status).to.eq(204)
        })
    });
    //Test a successful registration scenario.
    it('Register Successful', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/register",
            body:{
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test an unsuccessful registration scenario
    it('Register Unsuccessful', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/register",
            body:{
                    "email": "sydney@fife"
                },
            failOnStatusCode:false
        }).then(response=>{
            expect(response.status).to.eq(400)
        })
    });
    //Test a successful login scenario.
    it('Login Successful', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/login",
            body:{
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
        }).then(response=>{
            expect(response.status).to.eq(200)
        })
    });
    //Test an unsuccessful login scenario (e.g., missing fields).
    it('Login Unsuccessful', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/login",
            body:{
                    "email": "peter@klaven"
                },
            failOnStatusCode:false
        }).then(response=>{
            expect(response.status).to.eq(400)
        })
    });
    //Test the delayed response scenario provided by the ReqRes API to simulate loading times in real applications.
    it('Delayed Response', () => {
        cy.request({
            method:`POST`,
            url:"https://reqres.in/api/users?delay=3"
        }).then(response=>{
            expect(response.status).to.eq(201)
        })
    });
});