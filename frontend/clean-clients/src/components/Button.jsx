import "../App.css";

function Button(props) {
  return (
    <>
      {props.class === "search" ? (
        <button
          type={props.type}
          className={props.class + " button"}
          onClick={props.onClick}
        >
          <img src="/images/search.svg" alt="Search" className="search__icon" />
        </button>
      ) : (
        <button
          type={props.type}
          className={props.class + " button"}
          onClick={props.onClick}
        >
          {props.content}
        </button>
      )}
    </>
  );
}

export default Button;
