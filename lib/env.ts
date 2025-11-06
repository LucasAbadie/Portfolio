// Use getter functions to defer evaluation until runtime
export const emailConfig = {
  get serviceId() {
    return process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
  },
  get templateId() {
    return process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
  },
  get publicKey() {
    return process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
  },
};

export const recaptchaConfig = {
  get siteKey() {
    return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
  },
};