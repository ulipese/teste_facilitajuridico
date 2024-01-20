import "../App.css";
import Form from "./Form";

function Card(props) {
  return (
    <div className="backgroundCard">
      {props.type === "create" ? (
        <div className="card">
          <h1 className="card__title">Cadastrar clientes</h1>
          <Form type="create"></Form>
        </div>
      ) : (
        <div className="card">
          <h1 className="card__title search">Buscar clientes</h1>
          <Form type="search"></Form>
        </div>
      )}
    </div>
  );
}

export default Card;
