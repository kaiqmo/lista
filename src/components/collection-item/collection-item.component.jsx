import React from 'react';

import './collection-item.styles.scss';

import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import Grid from '@material-ui/core/Grid';
import {auth, deleteItem,UpdateList} from '../../firebase/firebase.utils.js';

import {setCurrentUser} from '../../redux/user/user.actions';

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

const CollectionItem = ( { item, currentUser }) => {
    return(
    <div className='collection-item'>
        <div className='collection-footer'>
        <Grid item xs={6}>
                <div className='name'>{item.text}</div>
        </Grid>
        <Grid item xs={6}>
            <div className="inline-buttons" >
            <CustomButton danger onClick={()=>handleRemove(item)} >Remove</CustomButton>
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
