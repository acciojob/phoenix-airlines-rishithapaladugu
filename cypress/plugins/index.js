const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // This is where you can set up your plugins
      require('cypress-axe')(on);
      // Other plugins can be added here
    },
  },
});
