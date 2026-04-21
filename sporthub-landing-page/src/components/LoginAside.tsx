export default function LoginAside() {
    return (
        <aside className="hidden lg:flex relative overflow-hidden bg-main-blue text-white p-12 flex-col justify-between">
                <div className="absolute w-120 h-120 rounded-full opacity-20 blur-3xl bg-secondary-blue" />
                <a href="/" className="relative flex items-center gap-2 w-fit">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary-blue" />
                    <span className="text-2xl font-bold tracking-tight">
                        SportHub<span className="text-secondary-blue">.</span>
                    </span>
                </a>
                <div className="relative space-y-6 max-w-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary-blue">Área restrita</p>
                    <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                        Bem-vindo de volta, <em className="text-secondary-blue not-italic">sócio</em>.
                    </h1>
                    <p className="text-white/70 text-base leading-relaxed">
                        Acesse sua agenda de aulas, gerencie reservas, acompanhe sua mensalidade
                        e fique por dentro dos avisos do clube.
                    </p>
                </div>

                <div className="relative text-xs text-white/40">
                    &copy; {new Date().getFullYear()} SportHub
                </div>
            </aside>
    )
}