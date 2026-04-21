export default function HeroSection() {
    return (
        <section className="relative text-white bg-hero bg-cover bg-center bg-no-repeat md:h-screen h-150 flex flex-col justify-end pb-20 md:pb-32 2xl:pb-48">
            <div className="absolute inset-0 bg-linear-to-r from-main-blue/80 via-main-blue/50 to-transparent" />
            <div className="relative z-10 w-full  max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-10 2xl:px-20">
                <div className="max-w-xl 2xl:max-w-3xl">
                    <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 md:mb-5 2xl:mb-8">
                        Bem-vindos<br />ao SportHub
                    </h1>
                    <p className="text-base md:text-lg 2xl:text-2xl text-white/80 leading-relaxed">
                        Onde o movimento encontra o propósito. Supere seus limites, conecte-se com sua melhor versão e faça parte da comunidade que não para de crescer.
                    </p>
                </div>
            </div>
        </section>
    )
}