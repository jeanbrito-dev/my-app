import { useParams } from "react-router"

export default function Repository() {
    const { username, project } = useParams()

    return (
        <section className="p-6 text-center">
            <h1 className="text-4xl font-bold mb-10 font-oswald">Repositório:</h1>
            <p className="font-raleway font-semibold text-2xl">Autor: {username}</p>
            <p className="font-raleway text-2xl">Nome do projeto: {project}</p>
        </section>
    )
}