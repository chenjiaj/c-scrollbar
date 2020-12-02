module.exports = {
  css: {
    extract: false,
  },

  lintOnSave: false,

  transpileDependencies: ['webrtc-adapter'],
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
