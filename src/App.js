import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

import Chats from './components/Chats';

function App() {
  return (
    <div style={{fontFamily: 'Avenir'}}>
      <Router>
        <AuthProvider >
        <Switch>
          <Route path='/chats' component ={Chats}/>
           <Route path='/' component={Login} />
        </Switch>
        </AuthProvider> 
      </Router> 


    </div>
  );
}

export default App;
