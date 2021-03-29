import React from 'react';

import './collection-item.styles.scss';

import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import Grid from '@material-ui/core/Grid';
import {auth, deleteItem,UpdateList, completedItem} from '../../firebase/firebase.utils.js';

import {setCurrentUser} from '../../redux/user/user.actions';


const handleButtons = async(item,button)=>{
  try{
    var userAuth = auth.currentUser;
    switch(button){
      case "deleteItem":
        await deleteItem(userAuth,item);
        break;
      case "updateItem":
        break;
      case "completeItem":
        await completedItem(userAuth,item);
        break;
      case "deleteAll":
        break;
      default: return false;

    }
    await UpdateList(userAuth).then((r)=> {
      console.log(r);
      setCurrentUser({id: r.id, ...r.data()});
    });
  }catch(error){
    console.error(error);
  }
}

const CollectionItem = ( { item,currentUser,completed }) => {
    return(
    
    <div className={` ${completed? completed:''} collection-item`}>
        <div className='collection-body'>
        <Grid item xs={6}>
              {
                item?
                <div className="body">
                    <h2 className="title">Nome: <span> {item.title} </span>
                    </h2>
                    <span className="description">Descrição: {item.text}</span>
                    <div className="due_date">Data Expiração: {item.date}</div>
                </div>
                
                :
              
                ''
              }
        </Grid>
        <Grid item xs={6}>
          <div className="inline-buttons" >
            
            {
              item.deleteAll?
              <CustomButton success onClick={()=>handleButtons(item,"deleteAll")} >Delete All</CustomButton>
              :
              <CustomButton danger onClick={()=>handleButtons(item,"deleteItem")} >Delete</CustomButton>
            }
          
            {
              item.completed?
              ''
              :
              <CustomButton success onClick={()=>handleButtons(item,"completeItem")} >Completed</CustomButton>
            }
            
            
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
