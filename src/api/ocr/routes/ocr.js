export default {
  routes: [
    {
      method: "POST",
      path: "/ocr/invoice",
      handler: "ocr.invoice",
      config: {
        auth: false, // 或 true，看你要唔要登入
      },
    },
  ],
};
