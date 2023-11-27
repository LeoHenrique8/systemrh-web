import axios from "axios"

const api = axios.create()
export type Folha = {
  id: number;
  IdEmpresa: string;
  DataFechamento: Date;
  DataPagamento: Date;
  TotalVencimentos: number;
  TotalDescontos: number;
  TotalLiquido: number;
  IdFuncionario: string;
  SalarioINSS: number;
  ValorFGTS: number;
  ListaBDFuncionario: string;
  Ativo: number;
};

export async function findBrazilianZipCode(zipCode: string): Promise<
  | {
      zipCode: string
      addressName: string
      neighborhood: string
      city: string
      state: string
    }
  | undefined
> {
  try {
    const { data } = await api.get(
      `https://viacep.com.br/ws/${zipCode.replace(/\D/g, "")}/json/`
    )

    return {
      zipCode: data.cep,
      addressName: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    }
  } catch (error) {
    console.error(error)
    return
  }
}

export async function findFolhaById(id: string): Promise<Folha | undefined> {
  try {
    const response = await axios.get(`http://localhost:3000/folha/${id}`); // Substitua "/api/folhas/" pela sua URL real

    const data = response.data;

    // Certifique-se de adaptar a extração de dados conforme necessário
    const folha: Folha = {
      id: data.Id,
      IdEmpresa: data.IdEmpresa,
      DataFechamento: new Date(data.DataFechamento),
      DataPagamento: new Date(data.DataPagamento),
      TotalVencimentos: data.TotalVencimentos,
      TotalDescontos: data.TotalDescontos,
      TotalLiquido: data.TotalLiquido,
      IdFuncionario: data.IdFuncionario,
      SalarioINSS: data.SalarioINSS,
      ValorFGTS: data.ValorFGTS,
      ListaBDFuncionario: data.ListaBDFuncionario,
      Ativo: data.Ativo,
    };

    return folha;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
