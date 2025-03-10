import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/commands.{ts, tsx, js, jsx}',
    viewportHeight: 768,
    viewportWidth: 1024,
  },
});
