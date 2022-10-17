import React from "react";

import Default from "../templates/Default";
import Orderlist from "../atoms/OrdersList";
import Avatar from "../atoms/Avatar";
//import Biouser from "../molecules/Biouser";
import { useParams } from "react-router-dom";

export default function Orders() {
  const { id } = useParams();

  const [Users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://634860670484786c6e98884c.mockapi.io/apicrm/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <Default>
      <Avatar src={`${Users.avatar}`} />
      <h1>Bem vindo</h1>
      <Orderlist
        name={`${Users.name}`}
        denheiroarrecadado={`${Users.dinheiroarrecadado}`}
        pedidos={`${Users.pedidos}`}
        nbairros={`${Users.nbairros}`}
      />
    </Default>
  );
}
