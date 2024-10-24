
import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Botao from "../Botao";

const SecaoCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <>
            <SecaoCard>
                {profissionais && profissionais.length ?
                    profissionais?.map((profissional) => {
                        return <Card key={profissional.id} profissional={profissional}></Card>
                    }) : "Não há avaliações para mostrar"}
            </SecaoCard>
            {profissionais && profissionais?.length > 4 ? <Botao>Ver mais</Botao> : null}
        </>
    )
}

export default Avaliacao;