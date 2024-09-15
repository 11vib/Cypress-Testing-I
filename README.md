# Testing ReqRes API Endpoints with Cypress

1. List Users
Test the retrieval of a list of users and validate the structure and content of the response.
Endpoint:
GET /api/users

2. Single User
Test the retrieval of a single user by ID.
Endpoint:
GET /api/users/{id}

3. Single User Not Found
Test retrieving a user with an invalid ID to ensure proper error handling.
Endpoint:
GET /api/users/{invalid-id}

4. List Resources
Test the retrieval of a list of resources (e.g., colours, products).
Endpoint:
GET /api/unknown

5. Single Resource
Test the retrieval of a single resource by ID.
Endpoint:
GET /api/unknown/{id}

6. Single Resource Not Found
Test retrieving a resource with an invalid ID to ensure proper error handling.
Endpoint:
GET /api/unknown/{invalid-id}

7. Create User
Test creating a new user using a POST request and ensure the user is added
correctly.
Endpoint:
POST /api/users

8. Update User (PUT)
Test updating a user's data using a PUT request (full update).
Endpoint:
PUT /api/users/{id}

9. Update User (PATCH)
Test updating a user using a PATCH request (partial update).
Endpoint:
PATCH /api/users/{id}

10. Delete User
Test deleting a user by ID.
Endpoint:
DELETE /api/users/{id}

11. Register - Successful
Test a successful registration scenario.
Endpoint:
POST /api/register

12. Register - Unsuccessful
Test an unsuccessful registration scenario (e.g., missing fields).
Endpoint:
POST /api/register

13. Login - Successful
Test a successful login scenario.
Endpoint:
POST /api/login

14. Login - Unsuccessful
Test an unsuccessful login scenario (e.g., missing fields).
Endpoint:
POST /api/login

15. Delayed Response
Test the delayed response scenario provided by the ReqRes API to simulate loading times in real applications.
Endpoint:
GET /api/users?delay=3
