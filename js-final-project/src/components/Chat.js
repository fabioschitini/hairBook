
import 'firebase/compat/firestore';
import { useState,useRef } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/Chat.css'
import { Link } from 'react-router-dom'
import UsersImage from './usersImage'

const Chat = (props) => {
    const auth = app.auth()
    const db = app.firestore()
    const [user] = useAuthState(auth)
    const [userList, setUserList] = useState(false)
    const [chatWindow, setChatWindow] = useState(false)
    const [chatMessages, setChatMessages] = useState('')
    const [chatName,setChatName]=useState(false)
    let userId = 'general'
    let currentUser
    let userName;
    const dummy=useRef()
    if (user) {
        userId = user.uid
        userName = user.displayName
    }
    currentUser = useCollectionData(db.collection(userId))
    let generalUsers = db.collection('General').doc('users')
    const generalUsersData = useDocumentData(generalUsers)[0]
    
    function showUsersList() {
        setUserList(true)
   
    }
    
    async function showChat(e) {
        console.log(e)
        if (e.target.id) {
            if (!currentUser[0].filter(user => user.id === e.target.id)[0]) {
            await db.collection(userId).doc(e.target.id).set({ messages: [], id: e.target.id, name: e.target.textContent })
            await db.collection(e.target.id).doc(userId).set({ messages: [], id: userId, name: userName })
            console.log('uploading users in the frined list')
        }
        const targetChat = await (await db.collection(userId).doc(e.target.id).get()).data()
        setChatWindow(targetChat)
        setChatName(e.target.innerHTML)
        }
        
    }
    async function onSubmit(e) {
        e.preventDefault()
        const chatInfo = await (await db.collection(userId).doc(chatWindow.id).get()).data().messages
        await db.collection(userId).doc(chatWindow.id).update({ messages: chatInfo.concat({ text: chatMessages, id: userId }) })
        await db.collection(chatWindow.id).doc(userId).update({ messages: chatInfo.concat({ text: chatMessages, id: userId }) })
        const targetChat = await (await db.collection(userId).doc(chatWindow.id).get()).data()
        setChatWindow(targetChat)
        setChatMessages('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <div>
 <button id='showUsers'onClick={showUsersList}>Show users list</button>
            {userList ? generalUsersData ? <div id='UsersDiv'>{generalUsersData.updatedUsers.map(user => {
                if (user.id !== userId) {

                   
                    return <div onClick={showChat} id={user.id } className='user-name'>  
                        <UsersImage id={user.id}/>
                            </div>
                    
                    
            }
                
                else {return null}
            })}
                <span className='usersClosingX' onClick={() => setUserList(false)}>X</span></div>
                : null : null}
      
            {chatWindow ?
                < div ref={dummy} id='ChatDiv'>
                    <div id='header'>
                        
                       <Link to={{
                            pathname: `/users/profile`,
                            state: {
                                id: chatWindow.id,
                                name:chatName
                            }}}>
                       <UsersImage id={chatWindow.id }/>
                        </Link>  
                            <span className='chatClosingX' onClick={() => setChatWindow(false)}>X</span></div>
                    < div id="MessageDiv" >{chatWindow.messages.map(message => {
                    if (message.id === userId) {
                        return <div className='MessageTextUser '>{message.text} </ div>
                    }
                    else { return <div className='MessageTextTarget '>{message.text}</div > }
                })} </div>
                    <form id='form' onSubmit={onSubmit}>
                        < textarea id='TextArea' value={chatMessages} onChange={(e) => setChatMessages(e.target.value)} />
                        <button id='Submit' >Submit</button>
                    </form>
                </div> : null
            }
            
        </div>
    )
}

export default Chat