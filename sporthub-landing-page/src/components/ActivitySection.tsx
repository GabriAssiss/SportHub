import Carousel from './Carousel';
import carousel1 from '../assets/images/carousel-1.jpg';
import carousel2 from '../assets/images/carousel-2.jpg';
import carousel3 from '../assets/images/carousel-3.jpg';
import carousel4 from '../assets/images/carousel-4.jpg';
import carousel5 from '../assets/images/carousel-5.jpg';
import carousel6 from '../assets/images/carousel-6.jpg';

const slides = [
    { image: carousel1, title: "Aulas de Pilates", phrase: "Equilíbrio entre corpo e mente em cada movimento." },
    { image: carousel2, title: "Tênis", phrase: "Foco total na linha, precisão em cada golpe." },
    { image: carousel3, title: "Beach Tennis", phrase: "Trocas rápidas, sorrisos garantidos e a areia sob os pés." },
    { image: carousel4, title: "Futevôlei", phrase: "Muito mais que um jogo, é o ritmo da praia em quadra." },
    { image: carousel5, title: "Academia", phrase: "Sua melhor versão é construída um treino por dia." },
    { image: carousel6, title: "Pickleball", phrase: "Dinâmico, estratégico e impossível de jogar uma vez só." },
];

export default function ActivitySection() {
    return (
        <section id="activities" className="bg-main-blue text-white py-12 md:py-16 2xl:py-24 flex flex-col items-center gap-4 md:gap-8 2xl:gap-10 px-4">
            <h1 className="text-4xl md:text-6xl 2xl:text-7xl">Atividades</h1>
            <h2 className="text-base md:text-xl 2xl:text-2xl text-center">Seis modalidades. Uma só obsessão.</h2>
            <Carousel slides={slides} />
            <p className="text-sm md:text-base 2xl:text-lg text-center mt-4 md:mt-6 2xl:mt-8">Também oferta-se massagem (pago separadamente, sob consulta e disponibilidade)</p>
        </section>
    )
}