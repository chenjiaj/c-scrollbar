module.exports = {
  css: {
    extract: false,
  },

  lintOnSave: false,
  publicPath: './',
  transpileDependencies: ['webrtc-adapter'],
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
