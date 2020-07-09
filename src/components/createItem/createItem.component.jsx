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
            date:''
        }
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
    render(){
        return (
            <div className='new-task'>
                <h2>Create a new task</h2>
                <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='title' type='text' 
                            label='Title'
                            handleChange={this.handleChange}
                            value={this.state.title} required 
                        />

                        <FormInput 
                            name='text' type='text' 
                            label='Name'
                            handleChange={this.handleChange}
                            value={this.state.text} required
                        />

                        <FormInput 
                            name='date' type='date' 
                            label=''
                            handleChange={this.handleChange}
                            value={this.state.date} required
                        />
                            
                        <div className='buttons'>
                            <CustomButton inverted type='submit'>Add Task</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}