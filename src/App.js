import './App.css';

function Food({props}){
  return <h1>I like {props}</h1>
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food props="김밥"/>
      <Food props="떡볶이"/>
      <Food props="순대"/>
      <Food props="새우튀김"/>
    </div>
  );
}

export default App;
