import 'firebase/compat/firestore';
import './App.css';
import Profile from './components/Profile'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import EditInfo from './components/EditInfo'
import Post from './components/Post'
import Home from './components/Home'
import Profilepictures from './components/Profilepictures'
//import Editpictures from './components/editPicture'
import Users from './components/Users'
function App() {
  //const auth = app.auth()
 // const [user] = useAuthState(auth)
  return (
    <div>
     
      
      
      <Router>
        <Nav> </Nav>
        
        <Switch>
            <Route exact path='/hairBook'><Home/></Route>
          <Route exact path='/post'><Post /></Route>
          <Route exact path='/profile'><Profile /></Route>
          <Route exact path='/profile/editInfo'><EditInfo/></Route>
          <Route exact path='/profile/Profilepictures'><Profilepictures /></Route>
          <Route exact path='/users'><Users /></Route>
          <Route exact path='/users/profile'><Profile  /></Route>
          <Route exact path='/users/profile/pictures'><Profilepictures /></Route>

         


        </Switch>
      </Router>
      </div>
  );
}

export default App;
