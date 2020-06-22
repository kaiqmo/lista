import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/header-component/header-component.jsx';

import {setCurrentUser} from './redux/user/user.actions';

import TodoPage from './pages/todolist/todolist.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import SignInAndSignUpPage from './pages/sign-in/sign-in.component.jsx';
import {auth, CreateUserProfileDocument,firestore} from './firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends React.Component {

  
  unsubscribeFromAuth = null;

  componentWillMount(){

    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot( {
          includeMetadataChanges: true},snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
        });
      }
        setCurrentUser(userAuth);
        
      });
  }
  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
        });
      }       
      });

      firestore.collection("users")
      .onSnapshot(function(snapshot) {
          snapshot.docChanges().forEach(function(change) {
              if (change.type === "added") {
                  console.log("New city: ", change.doc.data());
              }
              if (change.type === "modified") {
                  console.log("Modified city: ", change.doc.data());
              }
              if (change.type === "removed") {
                  console.log("Removed city: ", change.doc.data());
              }
          });
      });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        
        <Switch>
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
          <Route exact path='/todolist' component={TodoPage} />
          <Route  path='/' render={()=> this.props.currentUser? (<Redirect to='/todolist' />) : (<SignInAndSignUpPage />) } />
          <Route component={SignInAndSignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 

export default connect(mapStateToProps,mapDispatchToProps)(App);
