import "./scss/App.scss";
import Card from "./scss/components/Card";

function App() {
  return (
    <>
    <div className="wrapper">
      <h1>Ты сегодня покормил кота?</h1>
      <div className="card__items">
        <Card/>
      </div>
    </div>
    </>
    
  );
}

export default App;
