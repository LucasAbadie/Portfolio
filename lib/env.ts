function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const emailConfig = {
  serviceId: getEnvVar('NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
  templateId: getEnvVar('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'),
  publicKey: getEnvVar('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'),
};

export const recaptchaConfig = {
  siteKey: getEnvVar('NEXT_PUBLIC_RECAPTCHA_SITE_KEY'),
};