const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: './cypress/*.cy.*',
    supportFile: './cypress/support/*'
  },
})
