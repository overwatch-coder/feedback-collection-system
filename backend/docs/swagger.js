import swaggerAutogen from "swagger-autogen";

const doc = {
  name: "Zidio Internship",
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
  tags: [
    {
      name: "User",
      description: "User related routes",
    },
    {
      name: "Form",
      description: "Form related routes",
    },
    {
      name: "Submission",
      description: "Submission related routes",
    },
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  components: {
    securitySchemes: {
      apiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Enter JWT token",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const outputFile = "./docs.json";
const routes = ["./index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
