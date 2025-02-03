# Production Ready Node.js App with MongoDB, Express, and JWT Authentication

This is a production-ready Node.js CRUD (Create, Read, Update, Delete) application that uses MongoDB as the database, Express as the web framework, and JSON Web Tokens (JWT) for authentication. The application includes basic user registration and login functionality.


## Features

- **User Registration**: Users can register with a username, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **JWT Authentication**: JSON Web Tokens are used to authenticate users and protect routes.
- **CRUD Operations**: Basic CRUD operations are implemented for a sample resource (e.g., posts, items, etc.).
- **Environment Variables**: Configuration is managed using environment variables.
- **Security Features**: Includes various security features to protect the application.
- **Caching Using Redis**: Implements caching to improve performance.
- **Test Framework Using Jest**: Uses Jest for testing.
- **Docker Implementation**: Dockerized application for easy deployment.
- **Logger Implementation**: Uses Winston for logging.
- **Swagger Documentation**: API documentation using Swagger.
- **Password Hashing with bcrypt**: Secure password storage using bcrypt.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or a cloud instance like MongoDB Atlas)
- [Docker](https://www.docker.com/products/docker-desktop) (for Docker implementation)
- [Redis](https://redis.io/download) (for caching)

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

   The server will start on the port specified in the `.env` file (default is `3000`).This will start the server using `nodemon`, which automatically restarts the server when file changes are detected.

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

## Testing

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


