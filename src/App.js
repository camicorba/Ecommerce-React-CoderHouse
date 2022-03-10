import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
