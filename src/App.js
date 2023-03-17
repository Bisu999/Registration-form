
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Ragistration from './Components/Registration';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer thame='colored'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/ragister' element={<Ragistration/>}></Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
