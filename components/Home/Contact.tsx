"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { emailConfig, recaptchaConfig } from '@/lib/env';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const recaptchaWidgetId = useRef<number | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const recaptchaCallbackRef = useRef<((token: string) => void) | null>(null);

  // Function to submit form with reCAPTCHA token
  const submitFormWithToken = async (token: string) => {
    try {
      const currentYear = new Date().getFullYear();

      // Send both emails in parallel - both must succeed
      await Promise.all([
        // First mail (to me)
        emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            year: currentYear,
            "g-recaptcha-response": token,
          },
          emailConfig.publicKey
        ),
        // Second mail (auto-reply to sender)
        /* emailjs.send(
                    emailConfig.serviceId,
                    emailConfig.autoReplyTemplateId,
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        year: currentYear,
                        'g-recaptcha-response': token,
                    },
                    emailConfig.publicKey
                ) */
      ]);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form

      // Reset reCAPTCHA widget
      if (recaptchaWidgetId.current !== null && typeof window.grecaptcha !== "undefined") {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");

      // Reset reCAPTCHA widget on error
      if (recaptchaWidgetId.current !== null && typeof window.grecaptcha !== "undefined") {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }

      // Auto-hide error message after 8 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 8000);
    } finally {
      setIsLoading(false);
    }
  };

  // Store callback in ref so it's accessible in useEffect
  useEffect(() => {
    recaptchaCallbackRef.current = submitFormWithToken;
  }, [formData, isLoading]);

  // Initialize reCAPTCHA v2 Invisible widget
  useEffect(() => {
    const initRecaptcha = () => {
      if (
        typeof window.grecaptcha !== "undefined" &&
        recaptchaContainerRef.current &&
        recaptchaWidgetId.current === null
      ) {
        try {
          recaptchaWidgetId.current = window.grecaptcha.render(recaptchaContainerRef.current, {
            sitekey: recaptchaConfig.siteKey,
            size: "invisible",
            callback: (token: string) => {
              // Token received, proceed with form submission
              if (recaptchaCallbackRef.current) {
                recaptchaCallbackRef.current(token);
              }
            },
            "error-callback": () => {
              console.error("reCAPTCHA error callback triggered");
              setStatus("error");
              setIsLoading(false);
            },
            "expired-callback": () => {
              console.warn("reCAPTCHA expired");
              if (recaptchaWidgetId.current !== null) {
                window.grecaptcha.reset(recaptchaWidgetId.current);
              }
            },
          });
        } catch (error) {
          console.error("Error rendering reCAPTCHA:", error);
        }
      }
    };

    // Wait for reCAPTCHA script to load
    if (typeof window.grecaptcha === "undefined") {
      window.onRecaptchaLoad = initRecaptcha;
    } else {
      window.grecaptcha.ready(initRecaptcha);
    }

    return () => {
      // Cleanup
      if (recaptchaWidgetId.current !== null && typeof window.grecaptcha !== "undefined") {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    // Execute reCAPTCHA v2 Invisible - will trigger callback with token
    if (recaptchaWidgetId.current !== null && typeof window.grecaptcha !== "undefined") {
      try {
        window.grecaptcha.execute(recaptchaWidgetId.current);
      } catch (error) {
        console.error("reCAPTCHA execute error:", error);
        setStatus("error");
        setIsLoading(false);
      }
    } else {
      console.error("reCAPTCHA widget not initialized");
      setStatus("error");
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">Contact</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Let's Work
            <br />
            <span className="text-white/70">Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="votre.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors min-h-[120px]"
                placeholder="Votre message ou question..."
              ></textarea>
            </div>

            {/* Hidden reCAPTCHA v2 Invisible container */}
            <div ref={recaptchaContainerRef} style={{ display: "none" }}></div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{isLoading ? "Envoi..." : "Envoyer"}</span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>

            {/* Messages de feedback */}
            {status === "success" && (
              <p className="text-green-400 text-sm uppercase tracking-widest">
                ✓ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm uppercase tracking-widest">
                ✗ Erreur lors de l'envoi. Réessayez.
              </p>
            )}

            {/* reCAPTCHA badge notice */}
            <p className="text-white/40 text-xs mt-4">
              Ce site est protégé par reCAPTCHA et la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors"
              >
                Politique de confidentialité
              </a>{" "}
              et les{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors"
              >
                Conditions d'utilisation
              </a>{" "}
              de Google s'appliquent.
            </p>
          </form>
          <div>
            <div className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold mb-10 text-white">Informations de Contact</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-sm mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                      Email
                    </div>
                    <a
                      href="mailto:lucasabadie.pro@gmail.com"
                      className="text-white hover:text-white/70 transition-colors"
                    >
                      lucasabadie.pro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-sm mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                      Adresse
                    </div>
                    <address className="not-italic text-white/80">
                      16B rue Cécile Brunschvicg
                      <br />
                      31200 Toulouse
                      <br />
                      France
                    </address>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="text-sm uppercase tracking-widest text-white/70 mb-3">
                  Réseaux Sociaux
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/lucasabadie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                    aria-label="Connectons-nous sur LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://github.com/LucasAbadie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors group"
                    aria-label="Découvrez mes projets sur GitHub"
                  >
                    <Github className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white/10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5"></div>
    </section>
  );
}
