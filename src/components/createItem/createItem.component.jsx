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
            text:''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        try{
            var userAuth = auth.currentUser;
            var item = this.state.text;
            await addItem(userAuth,item);
            this.setState({text:''});
            await UpdateList(userAuth).then((r)=> {
                // console.log(r);
                setCurrentUser({id: r.id, ...r.data()});
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
                    <div className="form">
                        <FormInput 
                            name='text' type='text' 
                            label='New Task'
                            handleChange={this.handleChange}
                            value={this.state.text} required
                            styles="width: 60%;
                            margin-inline-start: auto;" />
                        <div className='buttons'>
                            <CustomButton inverted type='submit'>Add Task</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}