import './App.css';
import Navbar from './components/Navbar';
import Topic from './components/Topic';
import Problem from './components/Problem';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProblemQue from './components/ProblemQue';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Topic />} />
            <Route exact path="Home" element={<Topic />} />
            <Route exact path="Problem" element={<Problem />} />
            <Route exact path="ProblemQue" element={<ProblemQue />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
