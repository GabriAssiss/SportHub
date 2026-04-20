import { MdOutlineApartment } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import aboutImage from '../assets/images/about-section-image.jpg';

const highlights = [
    { icon: <MdOutlineApartment size={20} />, label: "1. Estrutura", desc: "Quadras profissionais, vestiários completos e estacionamento próprio." },
    { icon: <IoPeopleOutline size={20} />, label: "2. Comunidade", desc: "Eventos, torneios internos e uma rede que torna cada visita um encontro." },
    { icon: <GoTrophy size={20} />, label: "3. Excelência", desc: "Time técnico formado por atletas e profissionais com vivência internacional." },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-12 md:py-16 bg-gray-100">
            <div className="w-full max-w-3xl mx-auto px-6 flex flex-col gap-6 md:gap-8">

                <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">
                    Sobre Nós
                </h2>

                <div className="flex flex-col gap-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900">
                        Sobre a SportHub: Onde o Movimento Acontece
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        A SportHub nasceu com o propósito de redefinir a experiência de bem-estar e esporte na nossa cidade. Mais do que um clube, somos um ecossistema dedicado à performance, à saúde mental e à conexão social através do movimento.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Acreditamos que o esporte é o ponto de encontro entre o desafio pessoal e a diversão coletiva. Por isso, projetamos um espaço moderno que integra desde a intensidade das areias até a precisão do pilates, garantindo que cada membro encontre seu ritmo ideal.
                    </p>
                </div>

                <img src={aboutImage} alt="Instalações do SportHub" className="rounded-2xl w-full object-cover h-56 md:h-72" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {highlights.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
                            <div className="text-gray-500">{item.icon}</div>
                            <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}