import React from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function Orderlist(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Dinheiro arrecadado</th>
          <th>nº de pedidos</th>
          <th>Nº de barros atendidos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#</td>
          <td>{props.name}</td>
          <td>{props.denheiroarrecadado}</td>
          <td>{props.pedidos}</td>
          <td>{props.nbairros}</td>
        </tr>
        <tr>
          <td>{props.id}</td>
          <td>{props.pedido}</td>
          <td>{props.dinheiroarrecadado}</td>
        </tr>
        <tr>
          <td>{props.id}</td>
          <td>{props.pedido}</td>
          <td>{props.dinheiroarrecadado}</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default Orderlist;
