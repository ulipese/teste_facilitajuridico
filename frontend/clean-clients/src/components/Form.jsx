import "../App.css";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";
import callApi from "../api";
import { useEffect, useState } from "react";

function Form(props) {
  const [newClient, setNewClient] = useState({
    clientName: "",
    clientEmail: "",
    clientTel: "",
    clientCoord: "",
  });
  const [searchedClients, setSearchedClients] = useState([]);
  const [popupNextClients, setpopupNextClients] = useState("");
  const [nextClients, setNextClients] = useState([]);

  useEffect(() => {
    if (
      newClient.clientName &&
      newClient.clientEmail &&
      newClient.clientCoord &&
      newClient.clientTel
    ) {
      const api = async () => {
        const res = await callApi("create").post("", newClient);
        if (res.status === 201) {
          alert("Cliente criado com sucesso!");
        }
        if (res.status === 400) {
          alert("Já existe um cliente com esse email cadastrado!");
        }
      };
      api();
    }
  }, [newClient]);
  useEffect(() => {
    if (popupNextClients === "active") {
      const api = async () => {
        const res = await callApi("next-clients").get();
        if (res.status === 200) {
          setNextClients([...res.data]);
        }
      };
      api();
    }
  }, [popupNextClients]);
  const handleClick = async (event) => {
    const { className, name } = event.target;

    if (className.includes("create")) {
      const inputName = document.querySelector(".form__input.name");
      const inputEmail = document.querySelector(".form__input.email");
      const inputTel = document.querySelector(".form__input.tel");
      const inputCoord = document.querySelector(".form__input.coord");

      if (inputName.value === "" || inputName.length > 100) {
        alert("Digite o dado 'Nome' corretamente!");
        inputName.focus();
        return;
      }
      if (inputEmail.value === "" || inputEmail > 250) {
        alert("Digite o dado 'Email' corretamente!");
        inputEmail.focus();
        return;
      }
      if (!inputTel.value || inputTel.value.length !== 11) {
        alert("Digite o dado 'Telefone' corretamente!");
        inputTel.focus();
        return;
      }
      if (
        (!inputCoord.value && !inputCoord.value.includes(",")) ||
        !inputCoord.value.includes(".")
      ) {
        alert("Digite o dado 'Coordenadas' corretamente!");
        inputCoord.focus();
        return;
      }

      setNewClient({
        clientName: inputName.value,
        clientEmail: inputEmail.value,
        clientTel: inputTel.value,
        clientCoord: inputCoord.value,
      });

      inputName.value = "";
      inputEmail.value = "";
      inputTel.value = "";
      inputCoord.value = "";

      inputName.focus();
    }

    if (className.includes("search")) {
      const searchInput = document.querySelector("input.search");

      if (
        searchInput.value.includes("@") &&
        searchInput.value.includes(".com")
      ) {
        //email
        const res = await callApi("search").post("", {
          clientEmail: searchInput.value,
        });
        if (res.status === 404) {
          alert("Não foi encontrado nenhum cliente com esses dados");
          return;
        }
        if (res.status === 200) {
          setSearchedClients([...res.data]);
          return;
        }
      }
      if (searchInput.value.length === 11) {
        //tel
        const res = await callApi("search").post("", {
          clientTel: searchInput.value,
        });
        if (res.status === 404) {
          alert("Não foi encontrado nenhum cliente com esses dados");
          return;
        }
        if (res.status === 200) {
          setSearchedClients([res.data]);
          return;
        }
      }
      if (searchInput.value) {
        //name
        const res = await callApi("search").post("", {
          clientName: searchInput.value,
        });
        if (res.status === 404) {
          alert("Não foi encontrado nenhum cliente com esses dados");
          return;
        }
        if (res.status === 200) {
          setSearchedClients([...res.data]);
          return;
        }
      }
    }
    if (className.includes("map") || className.includes("card__back")) {
      popupNextClients === "active"
        ? setpopupNextClients("")
        : setpopupNextClients("active");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      {props.type === "create" ? (
        <>
          <Input
            name="Nome"
            type="text"
            class="name"
            placeholder="Ex. Felipe Sousa de Oliveira"
          ></Input>
          <Input
            name="Email"
            type="email"
            class="email"
            placeholder="Ex. cliente@email.com"
          ></Input>
          <Input
            name="Telefone"
            type="number"
            class="tel"
            placeholder="Ex. 11999999999"
          ></Input>
          <Input
            name="Coordenadas (x,y)"
            type="number"
            step="0.00000000000001"
            class="coord"
            placeholder="Ex. 15,12"
          ></Input>
          <Button
            type="submit"
            content="Cadastrar"
            class="create"
            onClick={handleClick}
          />
        </>
      ) : (
        <>
          <div className="form__input-search-client">
            <Input
              name="Nome, email ou tel do cliente"
              type="text"
              placeholder="Ex. Felipe Sousa, ou, 11999999999"
              class="search"
            ></Input>
            <Button
              type="submit"
              content="Buscar"
              class="search"
              onClick={handleClick}
            />
          </div>
          <div className="line"></div>
          <div className="searchedClients">
            {searchedClients.map((client, index) => {
              return (
                <div className="client" key={index}>
                  <img
                    src="/images/user.svg"
                    alt="Client"
                    className="client__image"
                  />
                  <div className="client__data">
                    <p className="client__name">
                      {client.clientname.length > 18
                        ? client.clientname.substring(0, 18) + "..."
                        : client.clientname}
                    </p>
                    <p className="client__email">
                      {client.clientemail.length > 18
                        ? client.clientemail.substring(0, 18) + "..."
                        : client.clientemail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="line"></div>
          <Button
            type="submit"
            content="Mapa de Visitação Rápida"
            class="map"
            onClick={handleClick}
          />

          <div className={"backgroundCard popup " + popupNextClients}>
            <div className="card popup">
              <img
                src="/images/back-arrow.svg"
                alt="back"
                className="card__back"
                onClick={handleClick}
              />
              <h1 className="card__title popup">Clientes próximos</h1>
              <p className="card__subtitle popup">
                Clientes para uma visita mais rápida com base em suas
                coordenadas
              </p>
              <div className="line"></div>
              <div className="searchedClients popup">
                {nextClients.map((client, index) => {
                  return (
                    <div className="client popup" key={index}>
                      <img
                        src="/images/user.svg"
                        alt="Client"
                        className="client__image"
                      />
                      <div className="client__data">
                        <p className="client__name">
                          {client.clientname.length > 12
                            ? client.clientname.substring(0, 12) + "..."
                            : client.clientname}
                        </p>
                        <p className="client__email">
                          {client.clientemail.length > 18
                            ? client.clientemail.substring(0, 18) + "..."
                            : client.clientemail}
                        </p>
                      </div>
                      <p className="client__coord">
                        ({client.clientcoord.replace(".", ",")})
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="line line-popup"></div>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default Form;
