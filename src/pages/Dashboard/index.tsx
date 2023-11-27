import { Main, IconLink } from "./style"
import PageTitle from "../../components/PageTitle"
import FormTitle from "../../components/FormTitle";
import { Stack } from "@mui/material"
import { MdHandshake, MdPeopleAlt, MdOutlineDomain, MdAttachMoney } from "react-icons/md";


export default function Dashboard() {
  return <>

  <PageTitle title="Dashboard geral"></PageTitle>
  <Stack direction={{ xs: "column", sm: "column" }}  mb={1}>
       <Main>
        <IconLink to="/">
        <MdHandshake size={150}/>
        <FormTitle title="Benefícios/Descontos"/>
        </IconLink>

        <IconLink to="/users">
        <MdPeopleAlt size={150}/>
        <FormTitle title="Funcionário"/>
        </IconLink>
        </Main>

        <Main>
        <IconLink to="/">
        < MdOutlineDomain size={200}/>
        <FormTitle title="Empresa"/>
        </IconLink>

        <IconLink to="/">
        < MdAttachMoney size={200}/>
        <FormTitle title="Folha"/>
        </IconLink>
       </Main>


      </Stack>
  </>
}
