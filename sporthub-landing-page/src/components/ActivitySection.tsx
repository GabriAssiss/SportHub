import carousel1 from '../assets/images/carousel-1.jpg';
import carousel2 from '../assets/images/carousel-2.jpg';
import carousel3 from '../assets/images/carousel-3.jpg';
import carousel4 from '../assets/images/carousel-4.jpg';
import carousel5 from '../assets/images/carousel-5.jpg';
import carousel6 from '../assets/images/carousel-6.jpg';
import Carousel from './Carousel';

const slides = [
    {
        image: carousel1,
        title: "Aulas de Pilates",
        phrase: "Equilíbrio entre corpo e mente em cada movimento."
    },
    {
        image: carousel2,
        title: "Futevôlei",
        phrase: "Muito mais que um jogo, é o ritmo da praia em quadra."
    },
    {
        image: carousel3,
        title: "Pickleball",
        phrase: "Dinâmico, estratégico e impossível de jogar uma vez só."
    },
    {
        image: carousel4,
        title: "Beach Tennis",
        phrase: "Trocas rápidas, sorrisos garantidos e a areia sob os pés."
    },
    {
        image: carousel5,
        title: "Tênis",
        phrase: "Foco total na linha, precisão em cada golpe."
    },
    {
        image: carousel6,
        title: "Academia",
        phrase: "Sua melhor versão é construída um treino por dia."
    },
];

export default function ActivitySection() {
    return (
        <section className='bg-main-blue text-white py-16 flex flex-col items-center gap-8'>
            <h1 className='text-6xl'>Atividades</h1>
            <h2 className='text-xl text-center'>Seis modalidades. Uma só obsessão.</h2>
            <Carousel slides={slides} />
        </section>
    )
}