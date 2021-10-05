import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData} from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/Post.css'
import uniqid from "uniqid";

const Post = () => {
    const auth = app.auth()
    const db = app.firestore()
    const storage=app.storage()
    const [user] = useAuthState(auth)
    const [textInfo, setTextInfo] = useState('')
     const [imageInfo,setImageInfo] = useState(false)
    const [url, setUrl] = useState(false)
    let userId='yep'
    let publications
    let userName
    let generalPublications;
    if (user) {
        userId = user.uid
        userName = user.displayName
    }
    let publicationArray = useDocumentData(db.collection(userId).doc('publications'))
    let generalPublicationsArray=useDocumentData(db.collection('General').doc('publications'))
    
    if (publicationArray[0]) {
        publications=publicationArray[0].array
    }
    if (generalPublicationsArray[0]) {
    generalPublications=generalPublicationsArray[0].array
}


    async function onSubmit(e) {
        e.preventDefault()
        let id = uniqid()
        console.log(e.target.img)
        console.log(publications)
        let src=e.target.img.src
        publications.unshift({ text: textInfo, personId: userId, src, id,userName,likes:0 })
        generalPublications.unshift({ text: textInfo, personId: userId, src, id,userName,likes:0 })
       
        //const uploadTask = storage.ref(`${userId}/${imageInfo.name}`).put(imageInfo)
        db.collection(userId).doc('publications').set({ array: publications})
        db.collection('General').doc('publications').set( { array: generalPublications}) 

        setTextInfo('')
        console.log('worked!')
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
    return <div>
       
        <form onSubmit={onSubmit}> 
            <p id='imageSubmit'>Image:<input required onChange={(e) => setImageInfo(e.target.files[0])} type="file"  accept="image/*" />
                <button type="button" onClick={UploadImage}>Upload Image</button></p> 
            <div id='imageContainer'>
            {url ? <img name="img" id='img'src={url} alt='The  yo Chosed'/> : null}
            </div>
            <p id='info'></p> <textarea id='text'value={textInfo }onChange={(e) => setTextInfo(e.target.value)}></textarea>
            <button id='submit'>Submit</button>
        </form>

    </div>
}

export default Post