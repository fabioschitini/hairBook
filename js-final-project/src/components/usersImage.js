import 'firebase/compat/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/usersImage.css'

const UsersImage = (props) => {
    const db = app.firestore()
    let users;
let userName=props.name
    let nameInfo = useDocumentData(db.collection(props.id).doc('name'))

 if (nameInfo[0]) {
    userName=nameInfo[0].nameInfo
    }
    
    let usersArray = useDocumentData(db.collection(props.id).doc('image'))
    
    if (usersArray[0]) {
    users = usersArray[0].url
    }
    console.log(users)

    if (users) {
        return(
        <div className='in'>
            <img id={props.id} className='usersImage' alt='profile' src={users} />
            <p id={props.id}>{userName }</p>
            </div>
        )
    }
    else {
        return(
        
        <div id={props.id} className='in'>
        <img id={props.id} className='usersImage' alt='any' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMV9SJKrpKP67CGJxKTlrHopj7HDE2J6hxw&usqp=CAU'/>
            <p id={props.id}>{userName }</p>
            </div>
        
        )
    }
}


export default UsersImage