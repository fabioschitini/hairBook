import 'firebase/compat/firestore';
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData} from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import uniqid from "uniqid";
import UsersImage from './usersImage'
import '../styles/Comments.css'
import { Link } from 'react-router-dom'


const Comments = (props) => {
     const auth = app.auth()
    const db = app.firestore()
    const [user] = useAuthState(auth)
    const [textInfo, setTextInfo] = useState('')
    const [ commentsState, setCommentsState ] = useState([])
    const [counter, setCounter] = useState(1)    

    let userId='yep'
    let comments=[];
    let correctCommentsArray;
    let userComments;
    let userName
    if (user) {
        userId = user.uid
        userName = user.displayName
    }
    let commentsArray = useDocumentData(db.collection('General').doc('comments'))
    
    if (commentsArray[0]) {
        //if (commentsArray[0].array) {
            //comments = commentsArray[0].array.map(comment => {
              //  if (comment.publicationId === props.id) {
                //    return comment
                //}
                //else { return null }
            //})
        comments=commentsArray[0].array
        }
    
    if (comments[0]) {
        
    correctCommentsArray=comments.filter(comments => comments.publicationId === props.id)
    }
    if (correctCommentsArray) {
        userComments =correctCommentsArray.filter(comments=>comments.personId===userId)
    }

    async function onSubmit(e) {
        console.log('yea submit')
        e.preventDefault()
        let id = uniqid()
       comments.unshift({ text: textInfo, personId: userId,publicationId:props.id,id,userName})
        //db.collection(userId).doc('comments').set({ array: comments.concat({ text: textInfo, personId: userId,publicationId:props.id,id})})
        db.collection('General').doc('comments').set( { array: comments})
        setTextInfo('')
    }

    function showMoreComments() {
        console.log('show more')
        console.log(counter)
        console.log(correctCommentsArray)
        if (correctCommentsArray) {
             setCounter(counter+1)
            let showComment = correctCommentsArray[correctCommentsArray.length - counter]
            if (showComment) {
                setCommentsState(commentsState.concat(showComment))
                }
        }
        
    }
    function remove (e){
        let id = e.target.id
        let comments=commentsArray[0].array
         let newArray=comments.filter(comments => comments.id !== id)
        db.collection('General').doc('comments').set({ array: newArray })
    }
    return(
        <div>
            <form onSubmit={onSubmit}>

                { user?<input placeholder='Comment here...' value={textInfo} onChange={(e) => setTextInfo(e.target.value)}></input>:null}
                 <button type="button" onClick={showMoreComments}><i id='comment-icon' class="far fa-comments"></i></button>
            </form>
            {userComments ? userComments.map(comments => {
                if (comments.publicationId === props.id) {
                    return (
                        <div className='comment-container'>
                             <Link to={{
                            pathname: `/users/profile`,
                            state: {
                                id: comments.personId,
                                name:comments.userName
                            }}}>
                    <div className='comment-header'>
                            <UsersImage id={comments.personId} />
                            <p  >{comments.userName}</p>
                        </div>   
                        </Link>  
                          
                    <p className='comment-text'>{comments.text} <button id={comments.id} onClick={remove}>Delete</button></p>
                    </div>
                )}
                else{return null}
            }):null } 
            {commentsState.map(comments => {
                if (comments.publicationId === props.id) {
                        return (
                    <div className='comment-container'>
                        <div className='comment-header'>
                            <UsersImage id={comments.personId} />
                            <p  >{comments.userName}</p>
                        </div>             
 <p className='comment-text'>{comments.text}</p>
</div>                   )
                }
                else{return null}
             
            })}
        </div>

    )
   
}

export default Comments