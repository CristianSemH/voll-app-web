import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizado = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CelulaEstilizado>Data</CelulaEstilizado>
                            <CelulaEstilizado>Horário</CelulaEstilizado>
                            <CelulaEstilizado>Profissional</CelulaEstilizado>
                            <CelulaEstilizado>Especialidade</CelulaEstilizado>
                            <CelulaEstilizado>Paciente</CelulaEstilizado>
                            <CelulaEstilizado>Mobalidade</CelulaEstilizado>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <LinhaEstilizada key={linha.id}>
                                    <CelulaEstilizado component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizado>
                                    <CelulaEstilizado>{linha.horario}</CelulaEstilizado>
                                    <CelulaEstilizado>{linha.profissional[0].nome}</CelulaEstilizado>
                                    <CelulaEstilizado>{linha.profissional[0].especialidade}</CelulaEstilizado>
                                    <CelulaEstilizado>{linha.paciente}</CelulaEstilizado>
                                    <CelulaEstilizado>{linha.modalidade}</CelulaEstilizado>
                                </LinhaEstilizada>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;