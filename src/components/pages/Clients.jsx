import React, { useState } from "react";
import Default from "../templates/Default";
import ClientsList from "../atoms/ClientsList";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function Clients() {
  const [showAddClient, setShowAddClient] = useState(false);
  const [newClient, setNewClient] = useState({});

  function onInputChange(event) {
    setNewClient((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function addClient() {
    newClient.amountSpent = newClient.amountSpent * 1;

    if (newClient.vipClient == "Não") {
      newClient.vipClient = false;
    } else {
      newClient.vipClient = true;
    }

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    };
    fetch("http://localhost:8080/users/createClient", options)
      .then(() => {
        setShowAddClient(false);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Default>
      <div className="container my-5">
        <h1>Clientes</h1>
        <div className="d-flex justify-content-between">
          <p className="my-4">
            Aqui você encontra as informações de todos os clientes de seu
            estabelecimento.
          </p>
          <Button
            variant="secondary"
            style={{ height: "30px", marginTop: "10px" }}
            onClick={() => setShowAddClient(!showAddClient)}
          >
            Novo cliente
          </Button>
        </div>
        {showAddClient && (
          <div className="d-flex justify-content-around">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Gênero</th>
                  <th>Cidade</th>
                  <th>Cliente Vip?</th>
                  <th>Valor gasto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form style={{ width: "150px" }}>
                      <Form.Group controlId="name">
                        <Form.Control
                          type="text"
                          style={{ height: "25px" }}
                          onChange={(e) => {
                            onInputChange(e);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ width: "150px" }}>
                      <Form.Group controlId="gender">
                        <Form.Control
                          type="text"
                          style={{ height: "25px" }}
                          onChange={(e) => {
                            onInputChange(e);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ width: "150px" }}>
                      <Form.Group controlId="city">
                        <Form.Control
                          type="text"
                          style={{ height: "25px" }}
                          onChange={(e) => {
                            onInputChange(e);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ width: "50px" }}>
                      <Form.Group controlId="vipClient">
                        <Form.Control
                          type="text"
                          style={{ height: "25px" }}
                          onChange={(e) => {
                            onInputChange(e);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td className="d-flex no-wrap justify-content-between">
                    R$
                    <Form style={{ width: "60px" }}>
                      <Form.Group controlId="amountSpent">
                        <Form.Control
                          type="number"
                          style={{ height: "25px" }}
                          onChange={(e) => {
                            onInputChange(e);
                          }}
                        />
                      </Form.Group>
                    </Form>
                    ,00
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
              <Button
                variant="success"
                className="ms-5"
                onClick={() => addClient()}
              >
                Adicionar Cliente
              </Button>
            </div>
          </div>
        )}
        <ClientsList />
      </div>
    </Default>
  );
}
