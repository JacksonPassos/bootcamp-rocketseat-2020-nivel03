import React from 'react'

import { Title, Form, Repositories } from './styles'

import logo from '../../assets/logo.svg'

import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {

    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/23226954?s=460&u=dbecedc12d80226ad9c1b11d3feffd1d0ebfe111&v=4" alt="Jackson Passos" />
                    <div>
                        <strong>Título repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/23226954?s=460&u=dbecedc12d80226ad9c1b11d3feffd1d0ebfe111&v=4" alt="Jackson Passos" />
                    <div>
                        <strong>Título repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/23226954?s=460&u=dbecedc12d80226ad9c1b11d3feffd1d0ebfe111&v=4" alt="Jackson Passos" />
                    <div>
                        <strong>Título repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

            </Repositories>
        </>
    )

}

export default Dashboard
