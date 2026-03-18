import { Link } from "react-router";

export default function Register() {
    return (
        <>
            <h1 className="text-3xl mt-4 mb-12 text-center text-white font-oswald">Cadastrar-se</h1>

            <form className="flex flex-col gap-4 font-raleway ">

                <input type="email" placeholder="Nome completo" className="border border-gray-400 rounded-xl px-4 py-4 text-white" />

                <input type="email" placeholder="seu@email.com" className="border border-gray-400 rounded-xl px-4 py-4 text-white" />

                <input type="password" placeholder="Crie uma senha" className="border border-gray-400 rounded-xl px-4 py-4 text-white" />

                <input type="password" placeholder="Confirme a senha" className="border border-gray-400 rounded-xl px-4 py-4 text-white" />

                <button className="bg-linear-to-r from-gray-400 to-gray-600 text-white rounded-xl px-4 py-3 font-bold mt-4 hover:from-gray-600 hover:to-gray-800 transition">Criar conta</button>

                <p className="text-white text-center mt-3">Já tem conta? <Link to="/login" className="text-gray-500 font-bold">Criar Conta</Link></p>
            </form>
        </>
    )
}