import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Frase from './components/Frase';

function App() {

  const name = "Pantoja";
  const job = "Empresário"
  const img = "https://via.placeholder.com/150"

  return (
    <div className="App">
      
     <Frase></Frase>
      <hr />
      <People name={name} img={img} job={job} ></People>
    </div>
  );
}

export default App;
