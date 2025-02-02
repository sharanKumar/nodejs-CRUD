# Simple Node.js CRUD App with MongoDB, Express, and JWT Authentication

This is a simple Node.js CRUD (Create, Read, Update, Delete) application that uses MongoDB as the database, Express as the web framework, and JSON Web Tokens (JWT) for authentication. The application includes basic user registration and login functionality.

## Features

- **User Registration**: Users can register with a username, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **JWT Authentication**: JSON Web Tokens are used to authenticate users and protect routes.
- **CRUD Operations**: Basic CRUD operations are implemented for a sample resource (e.g., posts, items, etc.).
- **Environment Variables**: Configuration is managed using environment variables.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or a cloud instance like MongoDB Atlas)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/nodejs-CRUD.git
   cd nodejs-CRUD
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your-jwt-secret-key
   ```

   Replace `your-database-name` and `your-jwt-secret-key` with your actual database name and a secure secret key for JWT.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The server will start on the port specified in the `.env` file (default is `3000`).

## API Documentation

### Authentication

- **POST /api/register**: Register a new user.
  - Request Body:
    ```json
    {
      "userName": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /api/login**: Login a user.
  - Request Body:
    ```json
    {
      "userName": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "your-jwt-token"
    }
    ```

### Protected Routes (Require JWT Authentication)

- **GET /api/tutorials**: Retrieve all tutorials.
- **GET /api/tutorials/:id**: Retrieve a specific tutorial by ID.
- **POST /api/tutorials**: Create a new tutorial.
  - Request Body:
    ```json
    {
      "title": "Tutorial Title",
      "description": "Tutorial Description"
    }
    ```
- **PUT /api/tutorials/:id**: Update an existing tutorial by ID.
  - Request Body:
    ```json
    {
      "title": "Updated Tutorial Title",
      "description": "Updated Tutorial Description"
    }
    ```
- **DELETE /api/tutorials/:id**: Delete a specific tutorial by ID.
- **DELETE /api/tutorials**: Delete all tutorials.

### Bcrypt Significance

Bcrypt is used to hash passwords before storing them in the database. This ensures that even if the database is compromised, the actual passwords are not exposed. Bcrypt is a strong hashing algorithm that incorporates a salt to protect against rainbow table attacks and is computationally intensive to protect against brute-force attacks.

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the server using `nodemon`, which automatically restarts the server when file changes are detected.

## Testing

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Node.js](https://nodejs.org/)

```

This `README.md` provides a comprehensive overview of the Node.js CRUD application, including setup instructions, API endpoints, and how to run the application. You can customize it further based on your specific project requirements.