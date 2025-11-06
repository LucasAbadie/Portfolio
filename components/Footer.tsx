import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

type FooterProps = {
  links?: { label: string; href: string }[];
};

export default function Footer({ links = [] }: FooterProps) {
  return (
    <footer className="py-7 pb-5 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold tracking-tighter">
              LUCAS A<span className="text-neutral-400">.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            {/*  */}
            <nav className="flex gap-6">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="h-6 w-px bg-neutral-800 hidden md:block"></div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/lucasabadie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/LucasAbadie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  strokeWidth={1}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lucas Abadie · {""}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              MIT License
            </a>
            , based on {""}
            <a
              href="https://github.com/MohamedDjoudir/landing-page-template-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              MohamedDjoudir
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Politique de confidentialité
            </a>
            <a
              href="/legal-notice"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
