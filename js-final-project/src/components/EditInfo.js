import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import app from '../firebase/firebase'
import '../styles/EditInfo.css'
import { useDocumentData} from 'react-firebase-hooks/firestore'


const EditInfo = () => {
    const auth = app.auth()
    const db = app.firestore()
    const storage=app.storage()
    const [user] = useAuthState(auth)
    const [nameInfo,setNameInfo] = useState('')
    const [BirthDayInfo,setBirthDayInfo] = useState('')
    const [cityInfo,setCityInfo] = useState('')
    const [professionInfo,setProfessionInfo] = useState('')
        const [imageInfo,setImageInfo] = useState(false)
    const [url, setUrl] = useState('')
    
    let userId = 'general'
    let currentUsers
    
    //let userName;
    if (user) {
        userId = user.uid
        //userName = user.displayName
    }
    let generalUsers = useDocumentData(db.collection('General').doc('users'))
    if (generalUsers[0]){
        currentUsers = generalUsers[0].updatedUsers
    }

    function UploadImage() {
     const uploadTask = storage.ref(`images/${imageInfo.name}`).put(imageInfo)
        uploadTask.on('state_changed',
            snapshot => { },
            error => {
            console.log(error)
            },
            () => {
                storage
                .ref('images')
                .child(imageInfo.name)
                .getDownloadURL()
                    .then(url => {
                    setUrl(url)
                })
        })
}
    async function onSubmit(e) {
        e.preventDefault()
        console.log('submiting info')

        db.collection(userId).doc('name').set({nameInfo,id:'profile-info'})
        db.collection(userId).doc('birthday').set({BirthDayInfo,id:'profile-info'})
        db.collection(userId).doc('city').set({ cityInfo,id:'profile-info' })
        db.collection(userId).doc('profession').set({ professionInfo, id: 'profile-info' })
        setNameInfo('')
        setBirthDayInfo('')
        setCityInfo('')
        setProfessionInfo('')
    }

    function submitImage(e) {
        e.preventDefault()
        db.collection(userId).doc('image').set({ url, id: 'profile-image' })
        console.log(currentUsers)
        let updatedUsers = currentUsers.map(user => {
            if (user.id === userId) {
                user.image = url
                return user
            }
            else { return user }
        })
        console.log(updatedUsers)
        db.collection('General').doc('users').set({ updatedUsers }) 
        setUrl('')
    }

    return (<div>
        <form id ='info-form'onSubmit={onSubmit}>
            <p>Name:</p> <textarea value={nameInfo} required onChange={(e)=>setNameInfo(e.target.value)}></textarea>
        <p>Birthday:</p> <textarea value={BirthDayInfo} required onChange={(e)=>setBirthDayInfo(e.target.value)}></textarea>
           <p>City:</p> <textarea value={cityInfo} required onChange={(e)=>setCityInfo(e.target.value)}></textarea>
            <p>Profession:</p> <textarea value={professionInfo} required onChange={(e) => setProfessionInfo(e.target.value)}></textarea>
            <button id='info-submit'>Submit</button>
            
        </form>

       
        <form id='image-submit' onSubmit={submitImage}>
 <p>Profile-Image</p> <input onChange={(e)=>setImageInfo(e.target.files[0]) } type="file" id="input-image" name="img" accept="image/*"/>
            <button onClick={UploadImage}>Upload Image</button>
            <div id='image-container'>
            {url ? <img id='profileImage' src={url} alt=' yo Chosed' /> : null}
            </div>
            <button id='submit-profie-image'>Submit Profile-Image</button>
        </form>
    </div>
    )
}

export default EditInfo