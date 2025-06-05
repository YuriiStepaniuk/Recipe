Recipe API Backend
This is the backend service for the Recipe API, built with NestJS. It provides endpoints to fetch recipe data, primarily by integrating with an external source: TheMealDB API.

🚀 Getting Started
Follow these steps to set up and run the backend locally.

Prerequisites
Node.js (LTS version recommended)
npm (comes with Node.js)

Install dependencies:

```bash
npm install
```

Configuration
This project uses environment variables for configuration.

Create a .env file, .env.example as a reference:

Running the Application
To run the application in development mode:

```bash
npm run start:dev
```

This will start the NestJS application, typically on http://localhost:3000 (or the port specified in your .env file). The server will automatically reload when you make changes to the code.

Built With

NestJS - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
Joi - Powerful schema description language and data validator for JavaScript.
TheMealDB API - The primary external 3rd party API used to fetch recipe data.
