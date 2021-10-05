import {Link} from 'react-router-dom'
import '../styles/Nav.css'
import app from '../firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { SignIn, SignOut } from '../firebase/signin'
import Chat from './Chat'
import { useDocumentData} from 'react-firebase-hooks/firestore'

const Nav = (props) => {
    const auth = app.auth()
    const db=app.firestore()
    const [user] = useAuthState(auth)
    let userId = 'yep'
        let users;

    if (user) { 
        userId=user.uid
    }
     let usersArray = useDocumentData(db.collection( userId).doc('image'))
    if (usersArray[0]) {
    users = usersArray[0].url
    }
    return (
        <nav>
        
                {user ?
                <ul>  
                    <Link to="/hairBook"> <li>Homepage</li></Link>
            <Link to="/users"><li>Users</li></Link>
                    <Link to="/profile">
                        
                        <li id='profile-div'>
                        {users ? <img  className='usersImage' alt='profile' src={users} /> :
                        <img  className='usersImage' alt='any' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMV9SJKrpKP67CGJxKTlrHopj7HDE2J6hxw&usqp=CAU'/>
                        }
                       <p>Profile</p> </li>
                    </Link>
                <Link to="/post"><li>+Post</li></Link>
                    <Chat />  
                    <SignOut />
                </ul>
                : <ul>
                      <Link to="/"> <li>Homepage</li></Link>
            <Link to="/users"><li>Users</li></Link>
                    <SignIn />
                        </ul>}
                
           
        </nav>
    )
}
export default Nav