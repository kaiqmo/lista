import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './todolist.component.scss';
import FarmHandler from '../../components/farmhandler/farmHandler';
import {auth,UpdateList} from '../../firebase/firebase.utils';
//onClick={this.handleClick}

const TodoPage = (currentUser) =>{
    console.log(currentUser);
    var lista = currentUser.currentUser? currentUser.currentUser.stocks : null;
    lista  = lista === [] || lista === ''? null : lista;
    
    var userAuth = auth.currentUser;

    return (
          <div className='todo-page'>
              {
                currentUser.currentUser?
                  <h2>Bem Vindo {currentUser.currentUser.email}</h2>
                :
                <Redirect to='../signin'/>
              }
              <div className="collection">
                <FarmHandler/>
              <h2>---</h2>
              <CustomButton inverted update type='submit' onClick={() => UpdateList(userAuth)} >Atualizar </CustomButton>
                {
                  lista?
                  <>
                   { lista.map( (item) => (
                        <CollectionItem key={item.id} item={item} completed={item.completed? 'completed' : ''} /> // retira todos os itens completos.
                    ))}                    
                  </>:

                    <div className="no-list-div">
                      <h2>Sem ações no momento, adicione.</h2>
                   </div>                 
                }
              </div>
            
        </div>
    )
};
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});

export default  connect(mapStateToProps)(TodoPage);