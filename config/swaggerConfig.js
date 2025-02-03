const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NodeJS-CRUD API",
      version: "1.0.0",
      description: "API documentation for NodeJS-CRUD project",
    },
    servers: [
      {
        url: "http://localhost:8080", // Change this to match your environment
      },
    ],
    tags: [
      {
        name: "Users",
        description: "API for users"
      },
      {
        name: "Tutorials",
        description: "API for tutorials"
      }
    ]
  },
  apis: ["./routes/*.js"], // Specify where your API routes are defined
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
