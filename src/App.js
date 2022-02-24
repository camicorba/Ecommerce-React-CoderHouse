import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  const titulo = "WASABI";
  return (
    
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer titulo={titulo}/>
      </header>
    </div>
  );
}

export default App;
