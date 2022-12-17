import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import  Crypto from './components/Crypto';

import News from './components/News';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
       <Navbar/>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<News/>} />
      <Route path='/crypto'  element={<Crypto/>}/>
    
     </Routes>
  </BrowserRouter>
    </>

  );
}

export default App;
