import './App.css';

function Food({name, picture}){
  return <div><h1>name {name}</h1><h1>이미지 {picture}</h1></div>
}

const foodILike = [
  {name: '이름', image : '이미지'}
]
function renderFood(dish){
  console.log(dish)
  return <Food name={dish.name} picture={dish.image} />
}
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
