const withOffline = require('next-offline');

module.exports = withOffline({
  compress: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      }
    ]
  },
});
