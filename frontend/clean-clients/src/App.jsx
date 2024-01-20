import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  if (window.location.pathname === "/") {
    window.location.pathname = "/cadastrar";
  }
  return (
    <div className="App">
      <Header></Header>
      {window.location.pathname === "/cadastrar" ? (
        <Card type="create"></Card>
      ) : (
        <Card type="search"></Card>
      )}
    </div>
  );
}

export default App;
