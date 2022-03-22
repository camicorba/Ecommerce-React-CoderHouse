import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
              <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
