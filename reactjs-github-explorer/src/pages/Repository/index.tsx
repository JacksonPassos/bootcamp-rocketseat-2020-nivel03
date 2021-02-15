import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

import { Header, RepositoryInfo, Issues } from './styles'
import logo from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>()

    return (
        <>
        <Header>
            <img src={logo} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>

        <RepositoryInfo>
            <header>
                <img src="https://avatars.githubusercontent.com/u/23226954?s=460&u=dbecedc12d80226ad9c1b11d3feffd1d0ebfe111&v=4" alt="Jackson Passos" />
                <div>
                    <strong>Nome do repositório</strong>
                    <p>Descrição aqui</p>
                </div>
            </header>

            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues abertas</span>
                </li>
  
            </ul>

        </RepositoryInfo>

        <Issues>
        <Link to="jkvbkjsabv">
                        <div>
                            <strong>jkbfkjebf</strong>
                            <p>lnvklwevwew</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
        </Issues>


        </>
    )

}

export default Repository
