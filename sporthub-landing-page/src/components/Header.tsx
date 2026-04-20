export default function Header() {
    return (
        <header className="text-white z-10 h-36 absolute top-0 left-0 w-full">
            <nav className="flex items-center justify-between p-4 h-full">
                <div>
                    <a href="#" className="text-xl font-bold">SportHub</a>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Sobre nós</a></li>
                    <li><a href="#" className="hover:underline">Atividades</a></li>
                    <li><a href="#" className="hover:underline">Contato</a></li>
                </ul>
                <div>
                    <a href="#" className="bg-secondary-blue text-white px-4 py-2 rounded-xl hover:bg-gray-200">
                        Área do Sócio
                    </a>
                </div>
            </nav>
        </header>
    )
}