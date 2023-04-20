import axios from "axios"
import { Header } from "../components/Header"
import { InputPesquisa } from "../components/InputPesquisa"
import { Listar, Wel } from "./styled"
export function Provincia() {

    const Url = 'https://express-rent-a-car-backend.vercel.app'

    async function api(nome: string) {
        const url = `${Url}/${nome}`;
        const response = await axios.get(url);

        return response.data
    }
    api('/provincia')

    return (
        <div>
            <Header />
            <Wel>
                <h2>Welcome </h2>
                <span>Conheças as Províncias Do País</span>
                <p>Qual é o seu Endereco</p>
            </Wel>
            <InputPesquisa />
            <Listar>
                <div>
                    <h1>Result</h1>
                </div>
            </Listar>
        </div>
    )
}