module.exports = ({ env }) => {
  const r2PublicUrl = env("R2_PUBLIC_URL", "") || "";
  const r2Host = r2PublicUrl.replace(/^https?:\/\//, "");

  return [
    "strapi::logger",
    "strapi::errors",
    {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": [
              "'self'",
              "data:",
              "blob:",
              "dl.airtable.com",
              "*.cloudflarecounts.com",
              r2Host,
            ],
            "media-src": ["'self'", "data:", "blob:", r2Host],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    "strapi::cors",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
};
