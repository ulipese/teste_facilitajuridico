import "../App.css";

function Button(props) {
  return (
    <>
  
      <button type={props.type} className={props.content + " button"}>
        {props.content}
      </button>
    </>
  );
}

export default Button;
