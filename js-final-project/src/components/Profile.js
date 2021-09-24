import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
import UsersImage from './usersImage'
import { useLocation } from 'react-router-dom'

const Profile = () => {
    let location = useLocation()
    const auth = app.auth()
    const db = app.firestore()
    const [user] = useAuthState(auth)
    let userId = 'general'
    let userName;
    let realUserId
    if (user) {
        userId = user.uid
        userName = user.displayName
        realUserId=user.uid
    }
    if (location.state) {
        userId = location.state.id
         userName=location.state.name
    }
    
    let birthDayInfo = useDocumentData(db.collection(userId).doc('birthday'))
    let cityInfo = useDocumentData(db.collection(userId).doc('city'))
    let professionInfo = useDocumentData(db.collection(userId).doc('profession'))
   
    

    
    return (<div>
        <div id='user-container'>
            <UsersImage id={userId} name={userName }/>
            

        </div>
        {birthDayInfo[0]&&cityInfo[0]&&professionInfo[0] ?
           <div id='profileInfo'>
            <p>{birthDayInfo[0].BirthDayInfo} </p>
            <p>{cityInfo[0].cityInfo} </p>
            <p>{professionInfo[0].professionInfo} </p>
            </div>
                
            : null}
        <div id='editButtons'>
            {location.state?
                location.state.id !== realUserId ?
                <Link to={{
                            pathname: `/users/profile/pictures`,
                            state: {
                                id: userId,
                                name:userName
                            }}}>
                <button>Pictures</button>
                    </Link> : <div>
                         <Link to='/profile/editInfo'><button>Add/Edit Information</button></Link>
                    <Link to='/profile/Profilepictures'><button>Publications</button> </Link>
            </div>
                
                : <div>
                    <Link to='/profile/editInfo'><button>Add/Edit Information</button></Link>
                    <Link to='/profile/Profilepictures'><button>Publications</button> </Link>
                </div>}
        </div>
        
    </div>
    )
}

export default Profile