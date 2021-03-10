module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
      proxy: 'https://account.withings.com'
}
}