import './App.css';
import Texto from './components/Texto';

const App = () => {

  const nombres = ["Rigoberta Menchu", "Pablo Forlán", "Morro García"];

  return (
    <div className="App">
      <header className="App-header">
       {nombres.map(nom => <Texto nombre={nom}/>)}
      </header>
    </div>
  );
}

export default App;
