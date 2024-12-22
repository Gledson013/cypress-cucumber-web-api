// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       // Adiciona o plugin do Cucumber
//       await addCucumberPreprocessorPlugin(on, config);

//       // Configura o esbuild como bundler
//       on(
//         'file:preprocessor',
//         createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         })
//       );

//       return config;
//     },
//     specPattern: 'cypress/e2e/features/**/*.feature', // Diretório dos arquivos .feature
//     supportFile: 'cypress/support/e2e.ts', // Arquivo de suporte
//   },
// });
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura o esbuild como bundler
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Configurações para bloquear anúncios
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeaded) {
          launchOptions.args.push('--disable-popup-blocking');
          launchOptions.args.push('--disable-ads');
          launchOptions.args.push('--disable-features=IsolateOrigins,site-per-process');
          launchOptions.args.push('--disable-blink-features=AutomationControlled');
        }
        return launchOptions;
      });
      on('task', {
        blockAds() {
          const blockedDomains = [
            'googleads.g.doubleclick.net',
            'pagead2.googlesyndication.com',
            'core.yads.tech',
            'display.yads.tech',
          ];

          on('before:browser:launch', (browser = {}, options) => {
            options.preferences.default.profile = { content_settings: { exceptions: { plugins: { ads: { setting: 2 } } } } };
            return options;
          });

          return null;
        },
      });

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature', // Diretório dos arquivos .feature
    chromeWebSecurity: false, // Desativa a segurança do Chrome
    supportFile: 'cypress/support/e2e.ts', // Arquivo de suporte
  },
  env: {
    "email": "teste2021@teste.com.br",
    "password": "teste"
  },

});

