import './App.css';
import HelloWord from './components/HelloWord';
 


function App() {

  var name = "Pantoja";

  function sum() {
    var sum = 2 + 2;
    return sum;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
 
      <HelloWord></HelloWord>

    </div>
  );
}

export default App;
