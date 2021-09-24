import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {useAuthState} from 'react-firebase-hooks/auth'
import app from '../firebase/firebase'
import { useLocation } from 'react-router-dom'
import Publications from './Publications'


const Profilepictures = () => {
    const location = useLocation()
     const auth = app.auth()
    const [user] = useAuthState(auth)
    let userId='yep'
    
    if (user) {
        userId = user.uid
        //userName = user.displayName
    }
    if (location.state) {
             userId = location.state.id
    }
    
           //<Publications id={userId}/>

    return <div>
        <h1>Pictures</h1>
       <Publications id={userId}/>
    </div>
}

export default Profilepictures