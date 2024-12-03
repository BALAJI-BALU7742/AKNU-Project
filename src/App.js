import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import User from './components/User'
import Admin from './components/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/user' element={<User />} />
         <Route path='/' element={<Home />} />
         <Route path='/admin' element={<Admin />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
