// TypeScript declarations for Google reCAPTCHA v2 Invisible
interface ReCaptchaV2 {
  ready(callback: () => void): void;
  execute(widgetId?: number): void;
  render(
    container: string | HTMLElement,
    parameters: {
      sitekey: string;
      size?: "invisible" | "normal" | "compact";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    },
  ): number;
  reset(widgetId?: number): void;
  getResponse(widgetId?: number): string;
}

interface Window {
  grecaptcha: ReCaptchaV2;
  onRecaptchaLoad?: () => void;
}
