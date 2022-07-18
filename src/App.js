import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router,Route,Routes    } from 'react-router-dom';

function App() {

  return (
    
        <Router>
          <Routes>
            <Route path= "/" element={LoginForm}  exact/>
            <Route path='./components/register' element={Register}/>
            <Route path='./home'></Route>
          </Routes>
        </Router>
        
  )
  
}
export default App;
