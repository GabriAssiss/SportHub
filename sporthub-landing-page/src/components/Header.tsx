import { useState } from "react";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="text-white z-20 h-20 2xl:h-24 fixed top-0 left-0 w-full bg-main-blue">
            <nav className="flex items-center justify-between px-6 md:px-10 2xl:px-16 h-full">
                <Link to="/" className="text-xl 2xl:text-2xl font-bold tracking-wide">SportHub</Link>

                <ul className="hidden md:flex gap-8 2xl:gap-12 text-sm 2xl:text-base font-medium">
                    <li><a href="/#about" className="hover:text-white/70 transition-colors">Sobre nós</a></li>
                    <li><a href="/#activities" className="hover:text-white/70 transition-colors">Atividades</a></li>
                    <li><a href="/#contacts" className="hover:text-white/70 transition-colors">Contatos</a></li>
                </ul>

                <Link to="/login" className="hidden md:flex items-center gap-2 bg-secondary-blue text-white text-sm 2xl:text-base px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-full hover:brightness-110 transition-all">
                    <FiUser size={15} className="2xl:w-5 2xl:h-5" />
                    Área do Sócio
                </Link>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-main-blue flex flex-col items-center gap-6 py-8 text-sm font-medium">
                    <a href="/#about" onClick={() => setMenuOpen(false)}>Sobre nós</a>
                    <a href="/#activities" onClick={() => setMenuOpen(false)}>Atividades</a>
                    <a href="/#contacts" onClick={() => setMenuOpen(false)}>Contatos</a>
                    <Link to="/login" className="flex items-center gap-2 bg-secondary-blue px-5 py-2.5 rounded-full" onClick={() => setMenuOpen(false)}>
                        <FiUser size={15} /> Área do Sócio
                    </Link>
                </div>
            )}
        </header>
    )
}