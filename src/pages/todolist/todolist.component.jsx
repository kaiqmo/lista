import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './todolist.component.scss';
import CreateItem from '../../components/createItem/createItem.component.jsx';


const TodoPage = (currentUser) =>{
    
    var lista = currentUser.currentUser? currentUser.currentUser.lista : null;
    lista  = lista === [] || lista === ''? null : lista;
    
      
    return (
          <div className='todo-page'>
              {
                currentUser.currentUser?
                   <CreateItem />
                :
                <Redirect to='../signin'/>
              }
              <div className="collection">
              <h2>Tasks</h2>
                {
                   lista?
                    lista.map( (item) => (
                        <CollectionItem key={item.id} item={item} completed={item.completed? 'completed' : ''} />
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