import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import People from './components/People';
import List from './components/List';
import Frase from './components/Frase';
import Event from "./components/Event"
import Form from './components/forms/Form';

function App() {

  const name = "Pantoja";
  const job = "Empresário"
  const img = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Testando evento</h1>
      <Event variavel='Numero 1'></Event>
      <Event variavel='Numero 2'></Event>
      <hr />
      <Form></Form>

    </div>


  );
}

export default App;
