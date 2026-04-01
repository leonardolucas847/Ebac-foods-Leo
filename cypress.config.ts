import { defineConfig } from 'cypress'
import '@testing-library/jest-dom'
export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
