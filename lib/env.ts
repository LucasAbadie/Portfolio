/**
 * Environment Configuration
 *
 * This file manages access to environment variables for external services.
 * Getter functions are used to defer evaluation until runtime, ensuring
 * proper access to process.env in both client and server contexts.
 *
 * @module lib/env
 */

/**
 * EmailJS Configuration
 * Used for the contact form email sending functionality
 */
export const emailConfig = {
  /** EmailJS Service ID */
  get serviceId() {
    return process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  },
  /** EmailJS Template ID for contact form emails */
  get templateId() {
    return process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  },
  /** EmailJS Public API Key */
  get publicKey() {
    return process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
  },
};

/**
 * Google reCAPTCHA Configuration
 * Used for spam protection on the contact form
 */
export const recaptchaConfig = {
  /** reCAPTCHA v2 Invisible Site Key */
  get siteKey() {
    return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  },
};
