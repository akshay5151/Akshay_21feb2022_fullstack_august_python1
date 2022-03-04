import './App.css';
import Product from './components/Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
