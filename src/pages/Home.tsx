import { Tweeter } from "../components/Header"
import { Wel } from '../components/styled'
import axios from "axios"
import { Listar } from '../components/styled'

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
            <Tweeter />
            <Wel>
                <h2>Welcome </h2>
                <span>Conheças as Províncias Do País</span>
                <p>Qual é o seu Endereco</p>
            </Wel>
            <Listar>
            </Listar>
        </div>
    )
}