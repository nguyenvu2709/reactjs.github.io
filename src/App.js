import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Loginforget from './pages/Login/Loginforget'
import Navbar from './pages/Menu/Navbar/Navbar';

function App() {
    return(
        <div className='App'>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route path='/password-reset' element={<Loginforget/>}/>
                <Route path='/navbar' element={<Navbar/>}/>
            </Routes>
        </div>
    );   
}
export default App;
