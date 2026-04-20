import { FiUser } from "react-icons/fi";

export default function Header() {
    return (
        <header className="text-white z-10 h-20 absolute top-0 left-0 w-full">
            <nav className="flex items-center justify-between px-10 h-full">
                <a href="#" className="text-xl font-bold tracking-wide">SportHub</a>

                <ul className="flex gap-8 text-sm font-medium">
                    <li><a href="#" className="hover:text-white/70 transition-colors">Sobre nós</a></li>
                    <li><a href="#" className="hover:text-white/70 transition-colors">Atividades</a></li>
                    <li><a href="#" className="hover:text-white/70 transition-colors">Contatos</a></li>
                </ul>

                <a href="#" className="flex items-center gap-2 bg-secondary-blue text-white text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all">
                    <FiUser size={15} />
                    Área do Sócio
                </a>
            </nav>
        </header>
    )
}