// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/global.scss";'
        }
      }
    }
  }