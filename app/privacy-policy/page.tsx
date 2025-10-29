"use client";

import Navbar from "@/components/Navbar";
import NoiseBackground from "@/components/NoiseBackground";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
                            Politique de
                            <br />
                            <span className="text-white/70">
                                confidentialité
                            </span>
                        </h2>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            1. Responsable du site
                        </h3>
                        <p>Ce site est édité par :</p>
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
                            2. Données collectées
                        </h3>
                        <p>
                            Ton utilisation du site est possible sans fournir de
                            données personnelles.
                            <br />
                            Cependant, lorsque tu utilises le formulaire de
                            contact, tu peux être amené à transmettre :
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Ton nom</li>
                            <li>Ton adresse email</li>
                            <li>Le contenu de ton message</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            3. Utilisation des données
                        </h3>
                        <p>
                            Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à ta demande. Elles ne sont ni revendues ni utilisées à des fins commerciales.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            4. Hébergement
                        </h3>
                        <p>
                            Le site est hébergé par un prestataire tiers. Les journaux techniques générés par le serveur (logs) peuvent contenir des données techniques (adresse IP, type de navigateur, etc.), uniquement pour des besoins de sécurité et de maintenance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            5. Cookies et suivi
                        </h3>
                        <p>
                            Ce site n’utilise pas de cookies de suivi à des fins publicitaires. Certains cookies techniques peuvent être déposés pour assurer le bon fonctionnement du site.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            6. Durée de conservation
                        </h3>
                        <p>
                            Les données envoyées via le formulaire de contact sont conservées uniquement le temps nécessaire au traitement de la demande.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            7. Droits des utilisateurs
                        </h3>
                        <p>
                            Conformément au RGPD, tu disposes des droits suivants :
                        </p>
                        <ul className="list-disc list-inside mt-4 mb-4 space-y-2">
                            <li>Droit d’accès et de rectification</li>
                            <li>Droit à l’effacement de tes données</li>
                            <li>Droit d’opposition</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, tu peux me contacter directement par email :&nbsp;
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
                            8. Sécurité
                        </h3>
                        <p>
                            Toutes les précautions sont prises pour assurer la sécurité des données transmises. Toutefois, aucune transmission sur Internet n’est totalement sécurisée.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white/80 font-semibold mt-10 mb-4">
                            9. Modifications
                        </h3>
                        <p>
                           La présente politique peut être mise à jour afin de rester conforme à la législation en vigueur.
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
