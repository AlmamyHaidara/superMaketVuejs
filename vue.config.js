const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'sk',
      fallbackLocale: 'sk',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/global.scss";`
      }
    }
  }
})
