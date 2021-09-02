import React from 'react';
// import {Redirect} from 'react-router-dom';
import './farmHandler.scss';

import CustomButton from '../custom-button/custom-button.component.jsx';
import {auth, addItem,UpdateList} from '../../firebase/firebase.utils.js';
import {setCurrentUser} from '../../redux/user/user.actions';
import CreateItem from '../createItem/createItem.component';

export default class FarmHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            title:'',
            date:'',
            type:''
        }
        this.handleClick = this.handleClick.bind(this);

    }
    handleSubmit = async event=>{
        event.preventDefault();
        try{
            var userAuth = auth.currentUser;
            await addItem(userAuth,this.state.text,this.state.title,this.state.date);
            this.setState({});
            await UpdateList(userAuth).then((r)=> {
                console.log(r);
                setCurrentUser({...r.data()});
              })
        }catch(error){
            console.error(error);
        }
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value});
    }

    handleClick = (type) =>{
        this.setState(
            {
            type: type.target.value,
            }
        )
    }

    render(){
        return (            
            <div className="creator">
                <h3> Adicionar</h3>
                <div className="creator-buttons">
                    {/* <CustomButton inverted type='submit' value="farm"   onClick={this.handleClick}> Fazenda</CustomButton>  
                    <CustomButton inverted type='submit' value="herd"   onClick={this.handleClick}> Pasto</CustomButton>
                    <CustomButton inverted type='submit' value="animal" onClick={this.handleClick}> Animal</CustomButton> */}
                    <CustomButton inverted type='submit' value="stocks" onClick={this.handleClick}> Stocks</CustomButton>
                </div>
                {
                    this.state.type === 'farm'?
                        <div className="createItemCustom">
                            <h2>Adicionando uma Fazenda</h2>
                            <CreateItem farm  />
                        </div>:
                    this.state.type === 'herd'?
                    <div className="createItemCustom">
                            <h2>Adicionando um Pasto</h2>
                            <CreateItem herd />
                            <CustomButton  type='submit' value="" onClick={this.handleClick}> Cancelar</CustomButton>
                        </div>:
                    this.state.type === 'animal'?
                        <div className="createItemCustom">
                            <h2>Adicionando um Animal</h2>
                            <CreateItem animal />
                            <CustomButton  type='submit' value="" onClick={this.handleClick}> Cancelar</CustomButton>
                        </div>:
                    this.state.type === 'stocks'?
                    <div className="createItemCustom">
                        <h2>Adicionando um nova ação</h2>
                        <CreateItem stocks />
                        <CustomButton  type='submit' value="" onClick={this.handleClick}> Cancelar</CustomButton>
                    </div>:
                    <span></span>
                        
                        
                }
            </div>
        )
    }
}


/*
<h2>Criar</h2>
                <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='title' type='text' 
                            label='Nome'
                            handleChange={this.handleChange}
                            value={this.state.title} required 
                        />

                        <FormInput 
                            name='text' type='text' 
                            label='Descrição'
                            handleChange={this.handleChange}
                            value={this.state.text} required
                        />

                        <div className='buttons'>
                            <CustomButton inverted type='submit'>Add Task</CustomButton>
                        </div>
                </form>
*/
