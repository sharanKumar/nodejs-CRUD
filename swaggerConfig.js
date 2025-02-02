const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my project",
    },
    servers: [
      {
        url: "http://localhost:8080", // Change this to match your environment
      },
    ],
    tags: [
      {
        name: "Users",
        description: "API for users in the system"
      },
      {
        name: "Tutorials",
        description: "API for tutorials in the system"
      }
    ]
  },
  apis: ["./routes/users.routes.js", "./routes/tutorial.routes.js"], // Specify where your API routes are defined
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
