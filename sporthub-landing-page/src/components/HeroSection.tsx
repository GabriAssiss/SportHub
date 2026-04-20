export default function HeroSection() {
    return (
        <section className="relative text-white bg-hero bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-end pb-32 px-16">
            <div className="absolute inset-0 bg-linear-to-r from-main-blue/80 via-main-blue/50 to-transparent" />

            <div className="relative z-10 max-w-xl">
                <h1 className="text-7xl font-bold leading-tight mb-5">
                    Bem-vindos<br />ao SportHub
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                    Onde o movimento encontra o propósito. Supere seus limites, conecte-se com sua melhor versão e faça parte da comunidade que não para de crescer.
                </p>
            </div>
        </section>
    )
}