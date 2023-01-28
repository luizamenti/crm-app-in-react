import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function ClientsList({}) {
  const [clientsData, setClientsData] = useState([]);
  const [showAmountSpent, setShowAmountSpent] = useState("");
  const [newAmountSpent, setNewAmountSpent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/users/all")
      .then((response) => {
        response.json().then((data) => {
          setClientsData(data);
        });
      })
      .catch((error) => console.log(error));
  });

  function updateAmountSpent(clientName, newAmountSpent) {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: clientName,
        newAmountSpent: newAmountSpent,
      }),
    };

    fetch("http://localhost:8080/users/updateAmountSpent", options)
      .then((response) => {
        response.json().then(() => {
          setShowAmountSpent("");
          setNewAmountSpent("");
        });
      })
      .catch((error) => console.log(error));
  }

  function deleteClient(clientName) {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: clientName,
      }),
    };

    fetch("http://localhost:8080/users/deleteClient", options).catch((error) =>
      console.log(error)
    );
  }

  return (
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
        {clientsData[0] &&
          clientsData[0].clients.map((client) => (
            <tr key={`${client.name} ${client.amountSpent}`}>
              <td>{client.name}</td>
              <td>{client.gender}</td>
              <td>{client.city}</td>
              <td>{client.vipClient ? "Sim" : "Não"}</td>
              {showAmountSpent === client.name ? (
                <td>
                  <div className="d-flex ">
                    R$
                    <Form style={{ width: "60px", height: "10px" }}>
                      <Form.Group controlId="newAmountSpent">
                        <Form.Control
                          type="number"
                          placeholder="00"
                          style={{ height: "25px" }}
                          onChange={(event) => {
                            setNewAmountSpent(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form>
                    ,00
                    <button
                      onClick={() =>
                        updateAmountSpent(client.name, newAmountSpent)
                      }
                      style={{ border: "none", background: "none" }}
                    >
                      <img
                        src="save.png"
                        style={{ width: "15px", marginLeft: "6px" }}
                        alt="save button"
                      ></img>
                    </button>
                    <button
                      onClick={() => setShowAmountSpent("")}
                      style={{ border: "none", background: "none" }}
                    >
                      <img
                        src="cross.png"
                        style={{ width: "15px" }}
                        alt="cancel button"
                      ></img>
                    </button>
                  </div>
                </td>
              ) : (
                <td>
                  R$ {client.amountSpent},00{" "}
                  <button
                    onClick={() => setShowAmountSpent(client.name)}
                    style={{ border: "none", background: "none" }}
                  >
                    <img
                      src="pencil.png"
                      style={{ width: "15px" }}
                      alt="edit button"
                    ></img>
                  </button>
                  <button
                    onClick={() => deleteClient(client.name)}
                    style={{ border: "none", background: "none" }}
                  >
                    <img
                      src="delete.png"
                      style={{ width: "15px" }}
                      alt="delete client button"
                    ></img>
                  </button>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
