import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
