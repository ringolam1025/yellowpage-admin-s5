module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("R2_ACCESS_KEY_ID"),
            secretAccessKey: env("R2_ACCESS_SECRET"),
          },
          endpoint: env("R2_ENDPOINT"),
          region: "auto",
        },
        params: {
          Bucket: env("R2_BUCKET"),
        },
        baseUrl: env("R2_PUBLIC_URL"),
      },
      upload: {},
      delete: {},
    },
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: "en",
      locales: ["en", "zh-Hant"],
    },
  },
});
