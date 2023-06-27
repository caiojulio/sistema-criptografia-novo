import Navbar from './components/Navbar/Navbar';
import ButtonEncrypt from './components/ButtonEncrypt/ButtonEncrypt';
import ButtonDecrypt from './components/ButtonDecrypt/ButtonDecrypt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Definição de rota do sistema */}
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<ButtonEncrypt/>}/>
          <Route exact path='/ButtonEncrypt' element={<ButtonEncrypt/>}/>
          <Route exact path='/ButtonDecrypt' element={<ButtonDecrypt/>} />
        </Routes>
    </Router>
  );
}

export default App;
