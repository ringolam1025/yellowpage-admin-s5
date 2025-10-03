module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      upload: {},
      delete: {},      
    },
    i18n: {
    enabled: true,
    config: {
      defaultLocale: 'en',
      // 你要支援嘅語言列表
      locales: ['en', 'zh-Hant', 'fr'],
    },
  },
  },
});