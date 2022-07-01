const { defineConfig } = require("cypress");

module.exports = defineConfig({
  name: "Using fixtures to represent data",
  email: "hello@cypress.io",
  body: "Fixtures are a great way to mock data for responses to routes",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
