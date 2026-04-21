import { FaPhone, FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export function ContactSection() {
    return (
        <section id="contacts" className="bg-main-blue text-white min-h-screen flex flex-col items-center px-4 pt-12 md:pt-16 pb-0">

            <span className="text-secondary-blue text-xs tracking-widest uppercase font-semibold mb-2">Fale conosco</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-3">Contato</h2>
            <p className="text-base md:text-lg mb-2">Vamos marcar sua primeira visita?</p>
            <p className="text-sm text-white/55 text-center max-w-sm leading-relaxed">
                Deixe seus dados e um membro do nosso time entra em contato para agendar um tour pelo clube.
            </p>
            <div className="mt-8 w-full max-w-xl bg-[#132060] border border-secondary-blue/25 rounded-2xl p-6 md:p-10 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 mb-5 md:mb-7">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-white/55 font-medium">Nome</label>
                        <input type="text" placeholder="Seu nome"
                            className="bg-transparent border-b border-white/20 focus:border-secondary-blue outline-none text-white py-2 text-sm placeholder:text-white/20 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-white/55 font-medium">Telefone</label>
                        <input type="tel" placeholder="(31) 9XXXX-XXXX"
                            className="bg-transparent border-b border-white/20 focus:border-secondary-blue outline-none text-white py-2 text-sm placeholder:text-white/20 transition-colors" />
                    </div>
                </div>

                <div className="flex flex-col gap-1 mb-5 md:mb-7">
                    <label className="text-xs text-white/55 font-medium">Email</label>
                    <input type="email" placeholder="seu@email.com"
                        className="bg-transparent border-b border-white/20 focus:border-secondary-blue outline-none text-white py-2 text-sm placeholder:text-white/20 transition-colors" />
                </div>

                <div className="flex flex-col gap-1 mb-6 md:mb-8">
                    <label className="text-xs text-white/55 font-medium">Mensagem</label>
                    <textarea placeholder="Conte-nos o que deseja..." rows={4}
                        className="bg-transparent border-b border-white/20 focus:border-secondary-blue outline-none text-white py-2 text-sm placeholder:text-white/20 transition-colors resize-none" />
                </div>

                <button className="w-full sm:w-auto bg-secondary-blue text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Enviar mensagem
                </button>
            </div>

            <div className="mt-10 md:mt-12 w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-8 pb-12">
                <div>
                    <h4 className="text-lg font-semibold tracking-widest uppercase mb-4">Contatos</h4>
                    <div className="flex flex-col gap-3">
                        <p className="flex items-center gap-2 text-sm text-white/55"><FaPhone size={13} /> (31) XXXX-XXXX</p>
                        <p className="flex items-center gap-2 text-sm text-white/55"><FaEnvelope size={13} /> email@exemplo.com.br</p>
                        <p className="flex items-center gap-2 text-sm text-white/55"><FaMobileAlt size={13} /> (31) 9XXXX-XXXX</p>
                        <p className="flex items-center gap-2 text-sm text-white/55"><FaMapMarkerAlt size={13} /> Pampulha — Belo Horizonte / MG</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold tracking-widest uppercase mb-4">Redes Sociais</h4>
                    <div className="flex gap-4">
                        {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
                            <div key={i} className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center cursor-pointer hover:border-secondary-blue hover:bg-secondary-blue/15 transition-all">
                                <Icon size={15} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-xl h-px bg-white/10" />
        </section>
    )
}