import React from 'react';

import './collection-item.styles.scss';

import {connect} from 'react-redux';

import { Redirect } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component.jsx';
// import Popup from '../popup/popup.component.jsx';

import { makeStyles } from '@material-ui/core/styles';

import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {auth, deleteItem,UpdateList} from '../../firebase/firebase.utils.js';

import {setCurrentUser} from '../../redux/user/user.actions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const handleRemove = async(item)=>{
  try{
    var userAuth = auth.currentUser;
    await deleteItem(userAuth,item);
    await UpdateList(userAuth).then((r)=> {
      console.log(r);
      setCurrentUser({id: r.id, ...r.data()});
    })
  }catch(error){
    console.error(error);
  }
}
// const handleAlter = (item)=>{
//   try{
//     var userAuth = auth.currentUser;
//     // await alterItem(userAuth,item);
//     await deleteItem(userAuth,item);
//     return <Redirect to='/todolist'/>
//   }catch(error){
//     console.error(error);
//   }
// }

const CollectionItem = ( { item, currentUser }) => {
    const { title,text } = item;
    return(
    <div className='collection-item'>
        <div className='collection-footer'>
        <Grid item xs={6}>
                <div className='name'>{text}</div>
        </Grid>
        <Grid item xs={6}>
            <div className="inline-buttons" >
            <CustomButton inverted onClick={()=>handleRemove(item)} >Remove</CustomButton>
          </div>
        </Grid> 
        </div>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});



export default connect(mapStateToProps)(CollectionItem);
