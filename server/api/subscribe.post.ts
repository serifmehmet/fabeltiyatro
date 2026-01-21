export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { email, name, last_name } = body;

  if (!email) {
    throw createError({
      statusCode: 422,
      statusMessage: "Lütfen e-posta adresinizi girin.",
    });
  }

  try {
    const response = await $fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${config.mailerliteKey}`,
        },
        body: {
          email,
          fields: {
            name: name || "",
            last_name: last_name || "",
          },
        },
      }
    );

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("MailerLite API Error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.data?.message || "Bir hata oluştu",
    });
  }
});
