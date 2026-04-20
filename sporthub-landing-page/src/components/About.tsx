import aboutImage from '../assets/images/about-section-image.jpg';

export default function AboutSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                <h2 className="text-3xl font-bold text-center mb-8">Sobre o SportHub</h2>
                <p className="text-2xl text-gray-700">
                    Fundado por um grupo de amantes do esporte, o SportHub nasceu da necessidade de um espaço dedicado para os fãs se reunirem e celebrarem suas paixões. Desde então, temos crescido rapidamente, oferecendo uma variedade de recursos, incluindo fóruns de discussão, notícias esportivas, perfis de atletas e muito mais.
                </p>
                <p className="text-2xl text-gray-700">
                    No SportHub, acreditamos que o esporte é mais do que apenas um jogo - é uma forma de vida. Estamos comprometidos em fornecer um ambiente seguro e acolhedor para todos os nossos membros, onde eles possam se conectar, aprender e crescer juntos. Junte-se a nós e faça parte da comunidade SportHub hoje mesmo!
                </p>

                <img className='rounded-2xl h-[600px]' src={aboutImage} alt="Sobre o SportHub" />
            </div>
        </section>
    )
}