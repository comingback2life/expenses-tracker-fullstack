import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Login/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path ='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
