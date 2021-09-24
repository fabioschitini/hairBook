import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/Users.css'
import { Link } from 'react-router-dom'
import UsersImage from './usersImage'
const Users = () => {
    const auth = app.auth()
    const db = app.firestore()
    const [user] = useAuthState(auth)
    let userId = 'general'
    let users;
// {user.image === '' ? <img alt='any' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMV9SJKrpKP67CGJxKTlrHopj7HDE2J6hxw&usqp=CAU' />
                          //  : <img alt='profile' src={user.image} />}
    if (user) {
        userId = user.uid
    }
let usersArray = useDocumentData(db.collection('General').doc('users'))
    
    if (usersArray[0]) {
         users=usersArray[0].updatedUsers
    }
    

    
    return (<div>
        {users ?
            users.map(user => {
                if (user.id !== userId) {
                    return  (
                        <div className='users-info'> 
                    
                        <Link to={{
                            pathname: `/users/profile`,
                            state: {
                                id: user.id,
                                name:user.name
                            }}}>
                        <UsersImage id={user.id }/>
                        </Link> 

                    </div>)
                   
                }
                else { return null }
            })
            : null}
                
        
            
            
     
        
        
    </div>
    )
}

export default Users