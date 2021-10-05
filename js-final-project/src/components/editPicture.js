import { useLocation } from 'react-router-dom'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useDocumentData} from 'react-firebase-hooks/firestore'
import app from '../firebase/firebase'
import '../styles/editPictures.css'



const Editpictures = () => {
    const location = useLocation()
console.log(location)
     const auth = app.auth()
    const db = app.firestore()
    const storage=app.storage()
    const [user] = useAuthState(auth)
    const [textInfo, setTextInfo] = useState(location.state.text)
     const [imageInfo,setImageInfo] = useState(false)
    const [url, setUrl] = useState(location.state.url)
    let userId='yep'
    let publications
    let generalPublications
    let userName;
    
   
    if (user) {
        userId = user.uid
        userName = user.displayName
    }
    let publicationArray = useDocumentData(db.collection(userId).doc('publications'))
    let generalPublicationArray = useDocumentData(db.collection('General').doc('publications'))

    if (publicationArray[0]) {
        publications = publicationArray[0].array
    }
    if (generalPublicationArray[0]) {
        generalPublications = generalPublicationArray[0].array
    }
     

    async function onSubmit(e) {
        e.preventDefault()
        let id =location.state.id
    let src=e.target.img.src
        console.log(src)
        let newArrayUser=publications.map(publications => {
            if (publications.id === location.state.id) {
                return publications={ text: textInfo, personId: userId, src,id,userName,likes:publications.likes }
            }
            else return publications
        })
        let newArrayGeneral=generalPublications.map(publications => {
            if (publications.id === location.state.id) {
                return publications={ text: textInfo, personId: userId, src,id,userName,likes:publications.likes }
            }
            else return publications
        })
     
        //const uploadTask = storage.ref(`${userId}/${imageInfo.name}`).put(imageInfo)
        db.collection(userId).doc('publications').set({ array: newArrayUser })
        db.collection('General').doc('publications').set( { array:newArrayGeneral })

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
    return  <div>
        <form onSubmit={onSubmit}> 
            <p id='imageSubmit'>Image:<input required onChange={(e) => setImageInfo(e.target.files[0])} type="file"  accept="image/*" />
                <button  type='button' onClick={UploadImage}>Upload Image</button></p> 
            <div id='imageContainer'>
            {url ? <img name="img" id='img'src={url} alt='The  yo Chosed'/> : null}
            </div>
            <p id='info'></p> <textarea id='text'value={textInfo }onChange={(e) => setTextInfo(e.target.value)}></textarea>
            <button id='submit'>Submit</button> 
        </form>

    </div>
}

export default Editpictures