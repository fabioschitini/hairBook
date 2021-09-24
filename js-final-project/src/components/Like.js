import '../styles/Like.css'
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData} from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import uniqid from "uniqid";

const Like = (props) => {
   // rules_version = '2';
//service firebase.storage {
  //match /b/{bucket}/o {
    //match /{allPaths=**} {
     // allow read, write: if request.auth != null;
    //}
  //}
//}

     const auth = app.auth()
    const db = app.firestore()
    const [user] = useAuthState(auth)
    let userId='yep'
    let likeStatus;
    let publications = [];
    let likesNumber = true
    let userName
    let status
    if (user) {
        userId = user.uid
        userName = user.displayName
    }
    let likesArray= useDocumentData(db.collection('General').doc('likes'))
    let publicationArray= useDocumentData(db.collection('General').doc('publications'))

    if (likesArray[0]) {
        likeStatus = likesArray[0].array

    }
    if (publicationArray[0]) {
        publications = publicationArray[0].array
        likesNumber=publications.filter(publications => publications.id === props.id)[0]
        console.log(likesNumber)
        //setLikeState( likesNumber)
    }
    if (likeStatus) {
        if (likeStatus.filter(status => status.userId === userId && status.publicationId === props.id)[0]) {
            status=likeStatus.filter(status => status.userId === userId && status.publicationId === props.id)[0].status
        }
       console.log('yeah')
   }
   
    function like() {
        let id = uniqid()
       if (!likeStatus.filter(status => status.userId === userId && status.publicationId === props.id)[0]) {
           db.collection('General').doc('likes').set({ array: likeStatus.concat({ userId, publicationId: props.id, id, status: true }) })
            let newLikesNumber= publications.map(publications => {
            if (publications.id === props.id) {
                return publications = {
                    text: publications.text, personId: publications.personId,
                    src: publications.src, id: publications.id,userName, likes: publications.likes + 1
                }
            }
            else return publications
            })
            db.collection('General').doc('publications').set({ array: newLikesNumber })
           console.log('initial +1')
       }
        
        else if (likeStatus.filter(status => status.userId === userId && status.publicationId === props.id)[0].status) {
           let newArrayGeneral = likeStatus.map(likes => {
               if (likes.publicationId === props.id && likes.userId === userId) {
                  likes = {  userId, publicationId: props.id, id, status: false}
                   return likes 
                }
                else return likes
           })
           db.collection('General').doc('likes').set({ array: newArrayGeneral })

           let newLikesNumber= publications.map(publications => {
            if (publications.id === props.id) {
                return publications = {
                    text: publications.text, personId: publications.personId,
                    src: publications.src, id: publications.id,userName, likes: publications.likes - 1
                }
            }
            else return publications
           })

            db.collection('General').doc('publications').set({ array: newLikesNumber })
           console.log('-1')
       }
           
       else if (!likeStatus.filter(status => status.userId === userId && status.publicationId === props.id)[0].status) {
           
          let newArrayGeneral = likeStatus.map(likes => {
               if (likes.publicationId === props.id && likes.userId === userId) {
                  likes = {  userId, publicationId: props.id, id, status: true}
                   return likes 
                }
                else return likes
          })
           
           let newLikesNumber= publications.map(publications => {
            if (publications.id === props.id) {
                return publications = {
                    text: publications.text, personId: publications.personId,
                    src: publications.src, id: publications.id,userName, likes: publications.likes + 1
                }
            }
            else return publications
           })

           db.collection('General').doc('likes').set({ array: newArrayGeneral })
            db.collection('General').doc('publications').set({ array: newLikesNumber})
           console.log('+1')
        }
    }

       // console.log('supposed to show more comments now')
    //}
    //function dislike(e){
    //}
    return (
        
        <div id='like-container'>

            {status ?<button onClick={like}><i class="fas fa-thumbs-up"></i>

</button> :
            
                 <button onClick={like}><i class="far fa-thumbs-up"></i></button>
            
            }          
                
                

            <p>{likesNumber ? <p>{likesNumber.likes}</p>  :null} </p>
        </div>

    )
   
}

export default Like