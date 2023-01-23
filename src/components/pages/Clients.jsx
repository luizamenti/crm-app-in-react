import React from "react";
import Default from "../templates/Default";
import ClientsList from "../atoms/ClientsList";

export default function Clients() {
  return (
    <Default>
      <div className="container my-5">
        <h1>Clientes</h1>
        <p className="py-3">
          Aqui você encontra as informações de todos os clientes de seu
          estabelecimento.
        </p>
        <ClientsList />
      </div>
    </Default>
  );
}
