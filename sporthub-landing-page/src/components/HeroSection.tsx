import Header from './Header';

function HeroSection() {
    return (
        <section className="text-white bg-hero bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center text-center p-4">
            <div className="bg-main-blue absolute h-full w-full opacity-60">
            </div>
            <Header />
            <div className="z-10">
                <h1 className="text-8xl font-bold mb-4">Bem-vindos ao SportHub</h1>
                <h2 className="text-2xl">
                    Onde o movimento encontra o propósito. Supere seus limites, conecte-se com sua melhor versão e faça parte da comunidade que não para de crescer.
                </h2>
            </div>
        </section>
    )
}

export default HeroSection;