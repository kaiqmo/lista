import React from 'react';

import './collection-item.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {selectCurrentUser} from '../../redux/user/user.selector';
import Grid from '@material-ui/core/Grid';
import {auth, deleteItem,UpdateList, completedItem} from '../../firebase/firebase.utils.js';

import {setCurrentUser} from '../../redux/user/user.actions';


const handleButtons = async(item,button)=>{
  try{
    var userAuth = auth.currentUser;
    switch(button){
      case "deleteItem":
        await deleteItem(userAuth,item);
        await UpdateList(userAuth).then((r)=> {
          console.log(r);
          setCurrentUser({id: r.id, ...r.data()});
        });
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
    
    var fixed_mp =  parseFloat(item.pricestock).toFixed(2) || item.pricestock;

    return(
    
    <div className={` ${completed? completed:''} collection-item`}>
        <div className='collection-body'>
              {
                item?
                <a className="body">
                    {
                      item.stock?
                      <>
                        <h3 className="Name"> {item.stock} </h3>
                        <h4 className="Quantity"> Ações: {item.quantity} </h4>
                        <h4 className="Price"> PM: {fixed_mp} </h4>
                        <h4 className="PriceToday">P.H.: $ 15.00</h4>
                        <h4 className="Earnings">Lucro: 5%</h4>
                      
                      {/* <span className="description"> Transação total:R${item.pricestock * item.quantity} </span> */}
                      </>
                      :
                      <>
                        <h2 className="title"> <span> {item.title} </span>
                        </h2>
                        <span className="description">Descrição: {item.text}</span>
                      </>
                    }
                </a>
                
                :
              
                ''
              }
          <div className="inline-buttons" >
            
              <CustomButton danger onClick={()=>handleButtons(item,"deleteItem")} >Delete</CustomButton>
            {/* {
              item.completed?
              ''
              :
              <CustomButton success onClick={()=>handleButtons(item,"completeItem")} >Completed</CustomButton>
            } */}            
            
          </div>
        
        </div>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});



export default connect(mapStateToProps)(CollectionItem);
