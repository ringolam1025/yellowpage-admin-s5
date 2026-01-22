module.exports = ({ env }) => ({
  upload: {
    config: {
      // provider: "cloudinary",
      // providerOptions: {
      //   cloud_name: env("CLOUDINARY_NAME"),
      //   api_key: env("CLOUDINARY_KEY"),
      //   api_secret: env("CLOUDINARY_SECRET"),
      // },
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
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
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
