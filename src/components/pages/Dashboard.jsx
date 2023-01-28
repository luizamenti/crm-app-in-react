import React, { useState, useEffect } from "react";
import Default from "../templates/Default";
import { VictoryPie } from "victory";

export default function Dashboard() {
  const [clientsData, setClientsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/users/all")
      .then((response) => {
        response.json().then((data) => {
          setClientsData(data);
          setLoading(false);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function countClients() {
    let count = 0;
    clientsData[0].clients.map((client) => ++count);
    return count;
  }

  function countRevenue() {
    let count = 0;
    clientsData[0].clients.map(
      (client) => (count = count + client.amountSpent)
    );
    return count;
  }

  function clientsByProperty(data, property) {
    const options = [
      ...new Set(data[0].clients.map((client) => client[property])),
    ];
    return options.map((option) => {
      let count = data[0].clients.filter(
        (client) => client[property] == option
      ).length;
      return {
        x: `${option}: ${count}`,
        y: count,
      };
    });
  }

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <img
          src="loading.png"
          alt="loading page"
          style={{ width: "50px" }}
        ></img>
        <p>Carregando...</p>
      </div>
    );
  } else {
    return (
      <Default>
        <div className="container my-5">
          <h1>Dashboard</h1>
          <p className="py-3">
            Aqui você encontra análises dos dados de clientes do seu
            estabelecimento.
          </p>
          <div className="d-flex justify-content-evenly my-5">
            <div
              className="d-flex flex-column no-wrap justify-content-center align-items-center my-4"
              style={{ width: "500px" }}
            >
              <h4>Número de clientes</h4>
              <h2 className="text-primary">{countClients()}</h2>
            </div>
            <div
              className="d-flex flex-column no-wrap justify-content-center align-items-center my-4"
              style={{ width: "500px" }}
            >
              <h4>Receita total</h4>
              <h2 className="text-primary">{countRevenue()}</h2>
            </div>
          </div>
          <div className="d-flex justify-content-evenly my-5">
            <div className="d-flex flex-column no-wrap justify-content-center align-items-center my-4">
              <h4>Clientes por gênero</h4>
              <VictoryPie
                data={clientsByProperty(clientsData, "gender")}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                height={300}
                width={500}
              />
            </div>
            <div className="d-flex flex-column no-wrap justify-content-center align-items-center my-4">
              <h4>Clientes por cidade</h4>
              <VictoryPie
                data={clientsByProperty(clientsData, "city")}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                height={300}
                width={500}
              />
            </div>
          </div>
        </div>
      </Default>
    );
  }
}
