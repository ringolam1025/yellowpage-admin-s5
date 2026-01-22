import fetch from "node-fetch";

export default {
  async invoice(ctx) {
    const { imageBase64, fileName } = ctx.request.body;

    if (!imageBase64) {
      ctx.throw(400, "Missing imageBase64");
    }

    try {
      // 1️⃣ Upload file to Mistral
      const uploadRes = await fetch("https://api.mistral.ai/v1/files", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: {
            content: imageBase64,
            fileName: fileName || "invoice.jpg",
          },
        }),
      });

      const upload = await uploadRes.json();

      // 2️⃣ OCR
      const ocrRes = await fetch("https://api.mistral.ai/v1/ocr", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral-ocr-latest",
          document: { file_id: upload.id },
        }),
      });

      const ocr = await ocrRes.json();

      ctx.body = {
        success: true,
        ocr,
      };
    } catch (err) {
      console.error(err);
      ctx.throw(500, "OCR failed");
    }
  },
};
