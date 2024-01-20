import "../App.css";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      {props.type === "create" ? (
        <>
          <Input
            name="Nome"
            type="text"
            placeholder="Ex. Felipe Sousa de Oliveira"
          ></Input>
          <Input
            name="Email"
            type="email"
            placeholder="Ex. cliente@email.com"
          ></Input>
          <Input
            name="Telefone"
            type="number"
            placeholder="Ex. 11999999999"
          ></Input>
          <Input
            name="Coordenadas (x,y)"
            type="number"
            placeholder="Ex. 15,12"
          ></Input>
          <Button type="submit" content="Cadastrar" />
        </>
      ) : (
        <>
          <Input
            name="Insira o dado do cliente"
            type="text"
            placeholder="Ex. Felipe Sousa, ou, 11999999999"
          ></Input>
          <Button type="submit" content="Buscar" />
          <div className="line"></div>
          <div className="searchedClients">
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
            <div className="client">
              <img
                src="/images/user.svg"
                alt="Client"
                className="client__image"
              />
              <div className="client__data">
                <p className="client__name">Felipe Sousa de Oliveira</p>
                <p className="client__email">felipe.sousa4030@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <Button type="submit" content="Mapa de Visitação Rápida" />
        </>
      )}
    </form>
  );
}

export default Form;
