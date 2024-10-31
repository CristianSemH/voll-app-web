import styled from 'styled-components'
import imgFundo from './fundo.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal = styled.div`
background-image:url(${imgFundo});
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
background-color: white;
width: 50vw;
height: 100%;
display: flex;
flex-diretcion: column;
align-items: center;
`

export default function PaginaBaseForm() {
    return (
        <ContainerPrincipal>
            <Container>
                <Outlet></Outlet>
            </Container>
        </ContainerPrincipal>
    )
}