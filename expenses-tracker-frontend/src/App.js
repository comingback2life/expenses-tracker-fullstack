import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import './App.css';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<LoginPage/>}/>
      <Route path ='/register' element={<RegisterPage/>}/>
      <Route path ='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
