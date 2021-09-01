import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './todolist.component.scss';
import FarmHandler from '../../components/farmhandler/farmHandler';
//onClick={this.handleClick}

const TodoPage = (currentUser) =>{
    
    var lista = currentUser.currentUser? currentUser.currentUser.lista : null;
    lista  = lista === [] || lista === ''? null : lista;
    
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
                {
                   lista?
                    lista.map( (item) => (
                        <CollectionItem key={item.id} item={item} completed={item.completed? 'completed' : ''} /> // retira todos os itens completos.
                    )) 

                    :

                    <div className="no-list-div">
                      <h2>No tasks available at the moment.</h2>
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