import React from 'react';

import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import { auth,getStock } from '../../firebase/firebase.utils';
import CollectionItem from '../../components/collection-item/collection-item.component';


const StockPage = (currentUser,stock) =>{

    
    var userAuth = auth.currentUser;
    getStock(userAuth,stock);
    var lista = currentUser.currentUser? currentUser.currentUser.target : null;
    lista  = lista === [] || lista === ''? null : lista;

    return (
        <div className="stock-orders">
            {
                currentUser.currentUser?
                  <h2>Bem Vindo {currentUser.currentUser.email}</h2>
                :
                <Redirect to='../signin'/>
            }
            <h2>---</h2>
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

    );

}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});

export default  connect(mapStateToProps)(StockPage);