
import "./scss/App.scss";
import Card from "./components/Card";

function App() {
  const data = {
    "cards": [
        {
        "id": 0,
        "pretitle": "Сказочное заморское яство",
        "title": "Нямушка",
        "taste": "с фуа-гра",
        "points":['10 порций',"мышь в подарок"],
        "weight": "0,5",
        "activeDescription": "Печень утки разварная с артишоками.",
        "isStock": true
        },
        {
          "id": 1,
          "pretitle": "Сказочное заморское яство",
          "title": "Нямушка",
          "taste": "с рыбой",
          "points":['40 порций',"2 мыши в подарок"],
          "weight": "2",
          "activeDescription": "Головы щучьи с чесноком, да свежайшая сёмгушка.",
          "isStock": false
          },
          {
            "id": 2,
            "pretitle": "Сказочное заморское яство",
            "title": "Нямушка",
            "taste": "с курой",
            "points":['100 порций',"5 мышей в подарок", "заказчик доволен"],
            "weight": "5",
            "activeDescription": "Филе из цыплят с трюфелями в бульоне.",
            "isStock": true
            },
    ]
}
  return (
    <>
    <div className="wrapper">
      <div className="content">
      <h1 className="main__title">Ты сегодня покормил кота?</h1>
      <div className="card__items">
        {data && data.cards.map((card) => (
          
          <div key={card.id}> <Card  {...card}/> </div>
        ))}
      </div>
      </div>
      
    </div>
    </>
    
  );
}

export default App;
