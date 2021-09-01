import React from 'react';
// import {Redirect} from 'react-router-dom';
import './createItem.component.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {auth, addItem,UpdateList} from '../../firebase/firebase.utils.js';
import {setCurrentUser} from '../../redux/user/user.actions';

export default class CreateItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            title:'',
            date:'',
            size:'',
            father:'',
            mother:'',
            birthday:'',
            vaccine:''
        }
    } /*size,race,father,mother,birthday,vaccine */
    handleSubmit = async event=>{
        event.preventDefault();
        try{
            var userAuth = auth.currentUser;
            await addItem(userAuth,this.state.text,this.state.title,this.state.date,this.state.size,this.state.father,this.state.mother,this.state.birthday,this.state.vaccine);
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
    handleClick = event =>{
        return '';
    }
    render(){
        return (
            <div className='new-task'>
                <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='title' type='text' 
                            label='Nome'
                            handleChange={this.handleChange}
                            value={this.state.title} required 
                        />

                        {
                            this.props.herd?                                
                            <> 
                                <FormInput 
                                    name='size' type='integer' 
                                    label='Tamanho'
                                    handleChange={this.handleChange}
                                    value={this.state.text} required
                                />
                            </>:
                                <span></span>
                        } 
                        {
                            this.props.animal?                                
                            <> 
                                <FormInput 
                                    name='race' type='text' 
                                    label='Raça'
                                    handleChange={this.handleChange}
                                    value={this.state.text}
                                />
                                <FormInput 
                                    name='father' type='text' 
                                    label='Nome Pai'
                                    handleChange={this.handleChange}
                                    value={this.state.text}
                                />
                                <FormInput 
                                    name='mother' type='text' 
                                    label='Nome Mãe'
                                    handleChange={this.handleChange}
                                    value={this.state.text}
                                />

                                <FormInput 
                                    name='birthday' type='date' 
                                    label='Nascimento'
                                    handleChange={this.handleChange}
                                    value={this.state.text}
                                />
                                <FormInput 
                                    name='vaccine' type='date' 
                                    label='Ultima Vacina'
                                    handleChange={this.handleChange}
                                    value={this.state.text}
                                />
                            </>:
                                <span></span> 
                        }
                        
                        <FormInput 
                            name='text' type='text' 
                            label='Descrição'
                            handleChange={this.handleChange}
                            value={this.state.text} required
                        />
                        <div className='buttons'>
                            <CustomButton inverted type='submit' >Adicionar { this.props.farm? 'Fazenda' : this.props.herd? 'Pasto' : this.props.animal? 'Animal' : <> </>}</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}