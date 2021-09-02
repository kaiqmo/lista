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
          
          var userStocks = firestore.collection(`users/${userAuth.uid}/stocks/`);
          var stocks = await userStocks.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });

          //farm
          var userFarms = firestore.collection(`users/${userAuth.uid}/farms/`);
          var farms = await userFarms.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });
          //herd
          var userHerds = firestore.collection(`users/${userAuth.uid}/farms/`);
          var herds = await userHerds.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });
          //animals
          var userAnimals = firestore.collection(`users/${userAuth.uid}/farms/`);
          var animals = await userAnimals.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });

          const { displayName, email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                lista,
                stocks,
                farms,
                herds,
                animals,
                ...additionalData
            })
          }catch(error){
              console.log('error creating user',error.message);
          }
        }
        // console.log(snapShot);
        return userRef;
  };

  //get stock
  export const getStock = async(userAuth,stock)=>{
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(snapShot.exists ){

      var userStocks = firestore.collection(`users/${userAuth.uid}/stocks/${stock}/list`);
      var stock_list = await userStocks.get().then(querySnapshot => {
        return  querySnapshot.docs.map(docs => docs.data());
      });
      console.log(stock_list);

      var target = { ...stock, list:stock_list};
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      
      var userStocks = firestore.collection(`users/${userAuth.uid}/stocks/`);
      var stocks = await userStocks.get().then(querySnapshot => {
        return  querySnapshot.docs.map(docs => docs.data());
      });

      try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            stocks,
            target
        })
      }catch(error){
          console.log('error creating user',error.message);
      }
    }
    
  }

  //adicionar e atualizar as stocks
  export const testeStocks = async(userAuth,stock,pricestock, quantity)=>{
    
    var id = String(new Date().getTime());
    var createdAt = new Date().toLocaleDateString();
    var userStocks = firestore.collection(`users/${userAuth.uid}/stocks/`);
    var stocks = await userStocks.get().then(querySnapshot => {
      return  querySnapshot.docs.map(docs => docs.data());
    });
    if(stocks){

       // ações que existem 
      var stock_exists =  stocks.filter( e => e.stock === stock.toLocaleUpperCase()|| e.stock === stock.toLocaleLowerCase())[0];
      if(stock_exists){
         // ação existe no array
        var new_qtd = +quantity + +stock_exists.quantity;
        var new_val = ( (+quantity * +pricestock)+(+stock_exists.quantity * +stock_exists.pricestock) ) / +new_qtd;

        var data_new = {
          stock:stock,
          quantity: new_qtd,
          pricestock:new_val,
          updatedAt:createdAt,
          id:stock_exists.id,
          createdAt:stock_exists.createdAt
        }
        //atualiza a ação principal 
        await firestore.collection(`users/${userAuth.uid}/stocks`).doc(stock)
        .update(data_new)
        .then( snapShot=>snapShot.val())
        .catch( e =>({
          errorCode:e.code,
          errorMessage:e.message
        }));

      }else{

        const data = {
          stock:stock,
          pricestock:pricestock,
          quantity:quantity,
          id:id,
          createdAt:createdAt,
          updatedAt:createdAt
        };
        //cria a ação principal
        await firestore.collection(`users/${userAuth.uid}/stocks`).doc(stock)
        .set(data)
        .then(async () => {
            console.log('Ação principal adicionada!');
        })
        .catch(error => {
          console.log(error);
        });

      }
      
      const data = {
        stock:stock,
        pricestock:pricestock,
        quantity:quantity,
        id:id,
        createdAt:createdAt,
        updatedAt:createdAt
      };        
      //cria uma nova ordem efetuada na lista da ação principal
      await firestore.collection(`users/${userAuth.uid}/stocks/${stock}/list`).doc(id)
      .set(data)
      .then(async () => {
          console.log('adicionado a lista de ordens!');
      })
      .catch(error => {
        console.log(error);
      });
    }
  };
    
  
  export const addStocks = async(userAuth,stock,pricestock,quantity) => {
    var id = String(new Date().getTime());
    var createdAt = new Date().toLocaleDateString();
    const data = {
      stock:stock,
      pricestock:pricestock,
      quantity:quantity,
      id:id,
      createdAt:createdAt,
      updatedAt:createdAt
    };
    console.log('data uid',data);
    console.log('user uid',userAuth.uid);
    
    await firestore.collection(`users/${userAuth.uid}/stocks`).doc(stock)
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

  export const addFarm = async(userAuth,text,title) => {
    var id = String(new Date().getTime());
    const data = {
      title:title,
      text: text,
      id:id,
      createdAt:id
    };
    await firestore.collection(`users/${userAuth.uid}/farm`).doc(id)
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

  export const addHerd = async(userAuth,text,title,size) => {
    var id = String(new Date().getTime());
    const data = {
      title:title,
      text: text,
      size:size,
      id:id,
      createdAt:id
    };
    await firestore.collection(`users/${userAuth.uid}/herd`).doc(id)
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

  export const addAnimal = async(userAuth,text,title,weight,father,mother,birthday,vaccine) => {
    var id = String(new Date().getTime());
    const data = {
      title:title,
      text: text,
      weight:weight,
      father:father,
      mother:mother,
      birthday:birthday,
      vaccine:vaccine,
      id:id,
      createdAt:id
    };
    await firestore.collection(`users/${userAuth.uid}/animals`).doc(id)
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

  export const addItem = async(userAuth,text,title) => {
    var id = String(new Date().getTime());
    const data = {
      title:title,
      text: text,
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

  export const completedItem = async(userAuth,item) => {
    var todays_date = new Date();
    var data = {
      ...item,
      completed:todays_date,
    };
    await firestore.collection(`users/${userAuth.uid}/lista`).doc(item.id).update(data)
    .then( snapShot=>snapShot.val())
    .catch( e =>({
      errorCode:e.code,
      errorMessage:e.message
    }));
      
      //     .child(id)
      //     .update(data)
      //     .then(() => ref.once('value'))
      //     .then(snapshot => snapshot.val())
      //     .catch(error => ({
      //       errorCode: error.code,
      //       errorMessage: error.message
      //     }));
      // }

  };


  export const UpdateList = async(userAuth)=>{
    if(!userAuth) return 0; // if the user doesnt exist
      
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    var userList = firestore.collection(`users/${userAuth.uid}/lista/`);
    var lista =await userList.get().then(querySnapshot => {
            return  querySnapshot.docs.map(docs => docs.data());
          });
    var userStocks = firestore.collection(`users/${userAuth.uid}/stocks/`);
    var stocks = await userStocks.get().then(querySnapshot => {
      return  querySnapshot.docs.map(docs => docs.data());
    });

    //farm
    var userFarms = firestore.collection(`users/${userAuth.uid}/farms/`);
    var farms = await userFarms.get().then(querySnapshot => {
      return  querySnapshot.docs.map(docs => docs.data());
    });
    //herd
    var userHerds = firestore.collection(`users/${userAuth.uid}/farms/`);
    var herds = await userHerds.get().then(querySnapshot => {
      return  querySnapshot.docs.map(docs => docs.data());
    });
    //animals
    var userAnimals = firestore.collection(`users/${userAuth.uid}/farms/`);
    var animals = await userAnimals.get().then(querySnapshot => {
      return  querySnapshot.docs.map(docs => docs.data());
    });

           const { displayName, email} = userAuth;
           const createdAt = new Date();
 
           try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 lista,
                 stocks,
                 farms,
                 herds,
                 animals
             })
           }catch(error){
               console.log('error creating user',error.message);
           }

  }

  export const deleteItem = async(userAuth,item) => {
    // Create a reference to the cities collection

    var lista = firestore.collection(`users/${userAuth.uid}/stocks/`);
    
    // Create a query against the collection.
    await lista.doc(item.stock).delete()
      .then(() => {
        console.log('Item removed!');
      })
      .catch(error => {
        return error;
        // NotificationManager.error(error.message, "Delete item failed");
        // this.setState({ isSubmitting: false });
      });
  };
  
  export const deleteAll = async(userAuth,item) => {
    // Create a reference to the cities collection

    var lista = firestore.collection(`users/${userAuth.uid}/`);
    
    // Create a query against the collection.
    await lista.doc("lista").delete()
      .then(() => {
        console.log('Lista removed!');
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