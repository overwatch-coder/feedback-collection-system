import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Feedback Collection System API Documentation",
    description:
      "This is the API documentation for the Feedback Collection System",
  },
  host:
    process.env.NODE_ENV !== "production"
      ? "localhost:8000"
      : "https://zidio-internship.herokuapp.com",
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8000}`,
      description: "Development server",
    },
    {
      url: `https://zidio-internship.herokuapp.com`,
      description: "Production server",
    },
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const outputFile = "./docs.json";
const routes = ["index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
