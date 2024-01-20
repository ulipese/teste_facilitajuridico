import "../App.css";

function Input(props) {
  return (
    <div className="input">
      <label className="form__label">{props.name}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={"form__input " + props.class}
        step={props.step}
      />
    </div>
  );
}

export default Input;
