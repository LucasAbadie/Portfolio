"use client";

import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Footer from "@/components/Footer";

export default function LegalNotice() {
    return (
        <main className="bg-black text-white">
            <NoiseBackground />
            <Navbar />
            {/* Privacy Policy Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative text-white/70">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-white/40"></div>
                            <div className="text-xs uppercase tracking-widest text-white/80">
                                Informations légales
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                            Mentions
                            <br />
                            <span className="text-white/70">
                                Légales
                            </span>
                        </h2>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            1. Éditeur du site
                        </h3>
                        <p>Le présent site est édité par :</p>
                        <p className="text-white font-semibold">Lucas Abadie</p>
                        <address className="not-italic">
                            16B rue Cécile Brunschvicg
                            <br />
                            31200 Toulouse, France
                        </address>
                        <p>
                            Email :&nbsp;
                            <a
                                href="mailto:lucasabadie.pro@gmail.com"
                                className="text-white hover:text-white/70 transition-colors"
                            >
                                lucasabadie.pro@gmail.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            2. Hébergement
                        </h3>
                        <p>Le site est hébergé par :</p>
                        <p className="text-white font-semibold">IONOS SARL</p>
                        <address className="not-italic">
                            7, place de la Gare – BP 70109
                            <br />
                            57201 Sarreguemines Cedex – France
                        </address>
                        <p>
                            Site web :&nbsp;
                            <a
                                href="https://www.ionos.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white/70 transition-colors"
                            >
                                www.ionos.fr
                            </a>
                        </p>
                        <p>Téléphone : 0970 808 911</p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            3. Propriété intellectuelle
                        </h3>
                        <p>
                            L’ensemble du contenu présent sur ce site (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de <span className="text-white font-semibold">Lucas Abadie</span>, sauf mention contraire.
Toute reproduction, distribution, modification ou utilisation, même partielle, est interdite sans l’accord préalable de l’éditeur.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            4. Responsabilité
                        </h3>
                        <p>
                            L’éditeur du site met tout en œuvre pour assurer l’exactitude des informations publiées. Toutefois, il ne saurait être tenu responsable des erreurs ou omissions, ni d’un usage inapproprié du contenu du site.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            5. Données personnelles
                        </h3>
                        <p>
                            Les données collectées via le formulaire de contact (nom, email, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs.
                            <br />
                            Pour plus d’informations, consultez la&nbsp;
                            <a
                                href="/privacy-policy"
                                className="text-white hover:text-white/70 transition-colors"
                            >
                                Politique de Confidentialité
                            </a>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            6. Liens externes
                        </h3>
                        <p>
                            Le site peut contenir des liens vers d’autres sites internet. L’éditeur décline toute responsabilité quant au contenu de ces sites tiers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            7. Droit applicable
                        </h3>
                        <p>
                            Les présentes mentions légales sont régies par le droit français.
                        </p>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
                <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
            </section>
            <Footer />
        </main>
    );
}
