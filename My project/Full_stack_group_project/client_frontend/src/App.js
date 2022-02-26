import './App.css';
import { AddProduct } from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBarMenu from './components/NavBar';
import {ProductDetails} from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarMenu />
        <Routes>
          <Route exact path='' element={<ShowProduct />} />
          <Route exact path='/addProduct' element={<AddProduct />} />
          <Route exact path='/:id/' element={<ProductDetails/>} />
          <Route exact path='/:id/update' element={<UpdateProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
