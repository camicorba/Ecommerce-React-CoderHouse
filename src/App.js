import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}> </Route>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}> </Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}></Route>
            
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
