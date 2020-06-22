import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// sempre precisa importa o firease completo pra dps poder dar import no store e auth
const config  = {
    apiKey: "AIzaSyDuHTtUoxaEUp7Bc05pmaDE6Quukvp0k1A",
    authDomain: "udemy-crown-41095.firebaseapp.com",
    databaseURL: "https://udemy-crown-41095.firebaseio.com",
    projectId: "udemy-crown-41095",
    storageBucket: "udemy-crown-41095.appspot.com",
    messagingSenderId: "468641248743",
    appId: "1:468641248743:web:f2b938d84adb228955f942",
    measurementId: "G-H9HBJ6PSFX"
  };

  
  export const CreateUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return; // if the user doesnt exist
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        if(!snapShot.exists ){
          const { displayName, email} = userAuth;
          const createdAt = new Date();
          // se o usuario nao existe ele faz um novo!
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            // NotificationManager.success("Account Created", "Success");


          }catch(error){
              console.log('error creating user',error.message);
          }
        }else{
            
          var userList = firestore.collection(`users/${userAuth.uid}/lista/`);
          var lista = await userList.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });
          
          // console.log(lista);

          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                lista,
                ...additionalData
            })
          }catch(error){
              console.log('error creating user',error.message);
          }
        }
        // console.log(snapShot);
        return userRef;
  };

  export const addItem = async(userAuth,item) => {
    var id = String(new Date().getTime());
    const data = {
      text: item,
      title:"novoItem",
      id:id,
      createdAt:id
    };
    await firestore.collection(`users/${userAuth.uid}/lista`).doc(id)
      .set(data)
      .then(async () => {
          console.log('item added!');
      })
      .catch(error => {
        console.log(error);
        // NotificationManager.error(error.message, "Create Item failed");
        // this.setState({ isSubmitting: false });
      });
  };

  export const UpdateList = async(userAuth)=>{
    if(!userAuth) return 0; // if the user doesnt exist
      
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    var userList = firestore.collection(`users/${userAuth.uid}/lista/`);
    var lista =await userList.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });
    // console.log(lista);

           const { displayName, email} = userAuth;
           const createdAt = new Date();
 
           try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 lista
             })
           }catch(error){
               console.log('error creating user',error.message);
           }

  }

  export const deleteItem = async(userAuth,item) => {
    // Create a reference to the cities collection

    var lista = firestore.collection(`users/${userAuth.uid}/lista/`);
    
    // Create a query against the collection.
    await lista.doc(item.id).delete()
      .then(() => {
        console.log('Item removed!');
      })
      .catch(error => {
        return error;
        // NotificationManager.error(error.message, "Delete item failed");
        // this.setState({ isSubmitting: false });
      });
  };





  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;