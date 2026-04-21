import { useState } from "react";
import { FiArrowLeft, FiLock, FiUser, FiArrowRight } from "react-icons/fi";

export default function LoginForm() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const formatCPF = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 11);
        return digits
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };

    return (
        <section className="flex items-center justify-center p-6 sm:p-12 bg-gray-50">
            <div className="w-full max-w-md">

                <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-10">
                    <FiArrowLeft size={16} /> Voltar ao site
                </a>

                <h2 className="text-4xl font-bold text-gray-900">Entrar</h2>
                <p className="mt-2 text-sm text-gray-500">
                    Use seu CPF e senha cadastrados no clube.
                </p>

                <form className="mt-10 space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="cpf" className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                            CPF
                        </label>
                        <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                id="cpf"
                                type="text"
                                inputMode="numeric"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={(e) => setCpf(formatCPF(e.target.value))}
                                maxLength={14}
                                className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="senha" className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                                Senha
                            </label>
                            <button
                                type="button"
                                className="text-xs text-secondary-blue hover:underline"
                            >
                                Esqueci minha senha
                            </button>
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                id="senha"
                                type="password"
                                placeholder="••••••••"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-blue focus:border-transparent transition"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-main-blue text-white text-sm font-medium hover:bg-main-blue/90 transition-colors disabled:opacity-60"
                    >
                        Acessar sua conta
                        <FiArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <p className="text-center text-xs text-gray-400 pt-4">
                        Ainda não é sócio?{" "}
                        <a href="/#contacts" className="text-secondary-blue hover:underline">
                            Agende uma visita
                        </a>
                    </p>
                </form>
            </div>
        </section>
    );
}