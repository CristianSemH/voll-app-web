import styled from 'styled-components';
import facebook from './assets/facebook.png';
import zap from './assets/whatsapp.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';


const RodapeEstilizado = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`

const ItemEstilizado = styled.li`
list-style-type:none;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <img src={facebook} alt='logo do facebook'></img>
                </ItemEstilizado>
                <ItemEstilizado>
                    <img src={zap} alt='logo do whatsapp
                        '></img>
                </ItemEstilizado>
                <ItemEstilizado>
                    <img src={google} alt='logo do google
                        '></img>
                </ItemEstilizado>
                <ItemEstilizado>
                    <img src={instagram} alt='logo do instagram
                        '></img>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2023 desenvolvimento por alura | projeto ficticio sem fim lucrativos</p>
        </RodapeEstilizado>
    )
}

export default Rodape;