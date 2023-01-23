import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/estrela.png";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Home() {
  // Acessar o valor inserido nos campos via state
  const [userInput, setUserInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    // criar método post
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userInput, password: passwordInput }),
    };

    fetch("http://localhost:8080/users/login", options)
      .then((response) => {
        response.json().then((data) => {
          if (data.token) {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate("/clients");
          } else {
            alert("Usuário ou senha inválidos.");
          }
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="logo-container d-flex flex-column align-items-center mt-3">
        <img
          src={logo}
          className="star-image-logo my-3"
          alt="Logo de estrela amarela"
        />
        <h1>CRM STARS</h1>
      </div>
      <div
        className="login-container d-flex flex-column justify-content-center align-items-center border rounded shadow-sm"
        style={{ height: "350px", width: "400px" }}
      >
        <div>
          <p className="text-center mb-4 fs-4">Login</p>
        </div>
        <Form className="form" onSubmit={login}>
          <Form.Group className="from-group mb-3" controlId="formGroupEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="nome@exemplo.com.br"
              value={userInput}
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="from-group mb-3" controlId="formGroupPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              value={passwordInput}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit">
              Entrar
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}
