import React from 'react';
// import {Redirect} from 'react-router-dom';
import './createItem.component.scss';

import {connect} from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {auth, addStocks,addFarm, addHerd, addAnimal, UpdateList, testeStocks} from '../../firebase/firebase.utils.js';
import {setCurrentUser} from '../../redux/user/user.actions';

class CreateItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            title:'',
            //herd
            size:0,
            //animals
            weight:0,
            father:'',
            mother:'',
            birthday:'',
            vaccine:'',
            //stocks
            stock:'',
            pricestock:0,
            quantity:0,
            country:"SAO"

        }
    } /*size,race,father,mother,birthday,vaccine */
    handleSubmit = async event=>{
        event.preventDefault();

        var userAuth = auth.currentUser;
        console.log('userAuth',userAuth);
        // um try para cada tipo de submit.
        if(this.props.stocks){
            try{
                await testeStocks(
                    userAuth,
                    this.state.stock,
                    this.state.pricestock,
                    this.state.quantity,
                    this.state.country
                );
                this.setState({});
                await UpdateList(userAuth);
                
            }catch(error){
                console.error(error);
            }
        }
        if(this.props.farm){
            try{
                await addFarm(
                    userAuth,
                    this.state.text,
                    this.state.title
                );
                this.setState({});
                await UpdateList(userAuth);
                // await UpdateList(userAuth).then((r)=> {
                //     console.log(r);
                //     setCurrentUser({...r.data()});
                // })
            }catch(error){
                console.error(error);
            }
        }
        if(this.props.herd){//text/size
            try{
                await addHerd(
                    userAuth,
                    this.state.text,
                    this.state.title,
                    this.state.size
                );
                this.setState({});
                await UpdateList(userAuth);
                // await UpdateList(userAuth).then((r)=> {
                //     console.log(r);
                //     setCurrentUser({...r.data()});
                // })
            }catch(error){
                console.error(error);
            }
        }
        if(this.props.animal){//mother,father,weight,birthday,vaccine
            try{
                await addAnimal(
                        userAuth,
                        this.state.title,
                        this.state.text,
                        this.state.weight,
                        this.state.mother,
                        this.state.father,
                        this.state.birthday,
                        this.state.vaccine
                );
                this.setState({});
                await UpdateList(userAuth);
                // await UpdateList(userAuth).then((r)=> {
                //     console.log(r);
                //     setCurrentUser({...r.data()});
                // })
            }catch(error){
                console.error(error);
            }
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
                        

                        {
                            this.props.stocks?
                                <>
                                <FormInput 
                                    name='stock' type='text' 
                                    label='Sigla da Empresa'
                                    handleChange={this.handleChange}
                                    value={this.state.stock} required
                                />
                                <FormInput 
                                    name='quantity' type='number' 
                                    label='Total de cotas'
                                    handleChange={this.handleChange}
                                    value={this.state.quantity} required
                                />
                                <FormInput 
                                    name='pricestock' type='number' 
                                    label='Preço da cota'
                                    handleChange={this.handleChange}
                                    value={this.state.pricestock} required
                                />
                                <span>O preço dessa transação foi : {this.state.quantity * this.state.pricestock}?</span>
                        
                                </>:
                            this.props.farm?
                                <>
                                <FormInput 
                                    name='title' type='text' 
                                    label='Nome'
                                    handleChange={this.handleChange}
                                    value={this.state.title} required 
                                />
                                <FormInput 
                                    name='text' type='text' 
                                    label='Descrição da Fazenda'
                                    handleChange={this.handleChange}
                                    value={this.state.text} required
                                />
                                </>:

                            this.props.herd?                                
                            <> 
                                <FormInput 
                                    name='title' type='text' 
                                    label='Nome'
                                    handleChange={this.handleChange}
                                    value={this.state.title} required 
                                />
                                <FormInput 
                                    name='size' type='integer' 
                                    label='Tamanho'
                                    handleChange={this.handleChange}
                                    value={this.state.size} required
                                />
                                <FormInput 
                                    name='text' type='text' 
                                    label='Descrição do pasto'
                                    handleChange={this.handleChange}
                                    value={this.state.text} required
                                />
                            </>:
                            this.props.animal?                                
                            <>
                                <FormInput 
                                    name='title' type='text' 
                                    label='Nome'
                                    handleChange={this.handleChange}
                                    value={this.state.title} required 
                                />
                                <FormInput 
                                    name='mother' type='text' 
                                    label='Nome da Mãe'
                                    handleChange={this.handleChange}
                                    value={this.state.mother} required
                                />
                                <FormInput 
                                    name='father' type='text' 
                                    label='Nome do Pai'
                                    handleChange={this.handleChange}
                                    value={this.state.father} required
                                />
                                <FormInput 
                                    name='weight' type='float' 
                                    label='Peso(kg)'
                                    handleChange={this.handleChange}
                                    value={this.state.weight} required
                                />
                                <FormInput 
                                    name='birthday' type='date' 
                                    label='Aniversário'
                                    handleChange={this.handleChange}
                                    value={this.state.birthday} required
                                />
                                <FormInput 
                                    name='vaccine' type='date' 
                                    label='Vacina'
                                    handleChange={this.handleChange}
                                    value={this.state.vaccine} required
                                />
                                <FormInput 
                                name='text' type='text' 
                                label='Descrição do Animal'
                                handleChange={this.handleChange}
                                value={this.state.text} required
                                />
                                
                                
                            </>:
                                <span></span> 
                        }
                        
                        <div className='buttons'>
                            <CustomButton inverted type='submit' >Adicionar { this.props.farm? 'Fazenda' : this.props.herd? 'Pasto' : this.props.animal? 'Animal' : <> </>}</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
  });
  
  
  
  export default connect(mapStateToProps)(CreateItem);
