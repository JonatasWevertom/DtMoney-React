import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de site</td>
            <td className="deposit">+ R$12.000,00</td>
            <td className="category">Venda</td>
            <td className="data">13/04/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel do apartamento</td>
            <td className="withdraw">- R$1.200,00</td>
            <td className="category">Casa</td>
            <td className="data">27/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}