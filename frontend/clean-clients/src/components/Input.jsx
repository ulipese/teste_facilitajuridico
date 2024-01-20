import "../App.css";

function Input(props) {
  return (
    <div className="input">
      <label className="form__label">{props.name}</label>
      <input type={props.type} placeholder={props.placeholder} className="form__input"/>
    </div>
  );
}

export default Input;
