module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", 'https:', "*.tinymce.com", "*.tiny.cloud", "blob:"],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "cdn.jsdelivr.net",
            "strapi.io",
            `${env('AWS_BUCKET')}.s3.amazonaws.com`,
          ],
          'media-src': ["'self'", 'data:', 'blob:', `${env('AWS_BUCKET')}.s3.amazonaws.com`],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
          "frame-src": ["*.youtube.com", "*.vimeo.com"]
        },
        upgradeInsecureRequests: null,
      },
    },

  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
