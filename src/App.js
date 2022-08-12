
import './App.css';
import Layout from './COMPONENTS/LAYOUT/layout';
import {Switch,Route, Redirect} from 'react-router-dom'
import StartPage from './PAGES/startPage';

function App() {
  return (
    
    <Switch>
      <Route path='/' exact>
        <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path='/welcome'>
        <StartPage></StartPage></Route>
    </Switch>
  );
}

export default App;
