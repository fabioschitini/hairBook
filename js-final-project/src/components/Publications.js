import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { useDocumentData } from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/Publications.css'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import UsersImage from './usersImage'
import Like from './Like'
const Publications = (props) => {
    const auth = app.auth()
    const [user] = useAuthState(auth)
    let realUserId
    if (user) {
    realUserId=user.uid
    }
    
    const location = useLocation()
    const db = app.firestore()
    let userId='yep'
    let publications
     let  comments=[]
     let commentsArray = useDocumentData(db.collection('General').doc('comments'))
    if (props) {
        userId = props.id
        //userName = user.displayName
    }
    if (location.state) {
             userId = location.state.id
    }
    let publicationArray = useDocumentData(db.collection(userId).doc('publications'))
    
    if (publicationArray[0]) {
        publications=publicationArray[0].array
    }
    if (commentsArray[0]) {
        comments = commentsArray[0].array
    }
        console.log(publicationArray)

    function remove(e) {
        let id = e.target.parentNode.parentNode.id
        let newArray=publications.filter(publication => publication.id !== id)
        db.collection(userId).doc('publications').set({ array: newArray })      
         let newCommentArray=comments.filter(comments => comments.publicationId !== id)
        db.collection('General').doc('comments').set({ array:  newCommentArray })
    }

    return <div>
        {publications ? <div> 
            {publications.map(publication => {
                return (<div >
                    <Link to={{
                            pathname: `/users/profile`,
                            state: {
                                id: publication.personId,
                                name:publication.userName
                            }}}>
                        <div className='headerContainer'>
             <UsersImage id={publication.personId }/>
                       
                   </div>
                        </Link>  
                   
                    <div id={publication.id} className='container'>
                    <img className='publicationImage' src={publication.src} alt='publications images' />
                        <p className='publication-subtitle'>{publication.text}</p>
                        {user?<Like id={publication.id }/> :null }
                        <div> 
                            <Comments id={publication.id} />
                            
                        </div>

                        {userId===realUserId ? <div> <button onClick={remove} >Delete</button>
                        <Link  to={{
                            pathname: `/tyled`,
                            state: {
                                id: publication.id,
                                url: publication.src,
                                text:publication.text
                            }
                        }
            }
                            > 
                            <button>Edit</button>
                         </Link> </div> :  null
                        }
                       
                    </div>
                    
                </div>
                    
                )
            })}

        </div>
            : null}
    </div>
}

export default Publications