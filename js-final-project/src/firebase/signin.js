import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import app from './firebase'
const auth = app.auth()
const db=app.firestore()
export const SignIn = () => {
  
      const provider = new firebase.auth.GoogleAuthProvider()
  async function singInWithGoogle() {
    const response = await auth.signInWithPopup(provider)
    const test = await db.collection(response.user.uid).get()
    if (test.empty) {
      console.log('adding user mate!')
      await db.collection(response.user.uid).doc('publications').set
        ({ array:[] });
      
      const doc = await(await db.collection('General').doc('users').get()).data();
      console.log(doc)
      await db.collection('General').doc('users').update({
        users: doc.users.concat({ name: response.user.displayName, id: response.user.uid,image:'' })
      })
      console.log('ca ira')
    }
    else {
      console.log('Already added mate')
    }
  }
  return (
    <div>
 <button className='Sing' onClick={singInWithGoogle}>Sing In</button>
    </div>
   
  )
}

export function SignOut() {
  return auth.currentUser && (
    <button className="Sing" onClick={()=>auth.signOut()}>Sing Out</button>
  )
}