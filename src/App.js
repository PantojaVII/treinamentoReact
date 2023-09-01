import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import People from './components/People';

function App() {

  const name = "Pantoja";
  const job = "Empresário"
  const img = "https://via.placeholder.com/150"

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">

      <SayMyName name={name}></SayMyName>
      <hr />
      <People name={name} img={img} job={job} ></People>
    </div>
  );
}

export default App;
