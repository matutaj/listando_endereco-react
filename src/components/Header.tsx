import { Logo, Nav, Ul } from "./styled"


export function Header() {
    return (
        <Nav>
            <Logo src="https://www.governo.gov.ao/public/app-assets/img/gov_angola.svg" alt="Ocorreu um Erro com a Imagem" />


            <Ul>
                <li>Home</li>
                <li>About</li>
                <li>Documentation</li>
            </Ul>

        </Nav>
    )
}