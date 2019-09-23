import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList';
import url from './../url';

class Example extends Component {

    constructor(props){
        super(props);

        this.state = {
            wallet_id: 0,
            money: 0,
            transfers: [],
            errors: '',
            form: {
                description: '',
                amount: 0
            }
        }                  
    }

    async componentDidMount(){
        try {
            let resp = await fetch(`${url}/api/wallet`);
            let data = await resp.json();            
            this.setState({
                wallet_id: data.id,
                money: data.money,
                transfers: data.transfers
            })            
        } catch (error) {
            this.setState({errors: error});
        }
    }

    async onSubmitHandler(event){
        event.preventDefault();          
        try {
            let wallet_id = this.state.wallet_id;
            let form = {...this.state.form, wallet_id};
            
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }            

            let resp = await fetch(`${url}/api/transfer`, config);
            let data = await resp.json();  
            
            console.log(data);
            
            let money = this.state.money;
            let transfers = this.state.transfers.slice()
            transfers.push(data);

            this.setState({
                money: money + (Number(data.amount)),
                transfers: transfers
            });
        } catch (error) {
            this.setState({errors: error});
        }
    }

    onFormDescriptionInputHandler(event){
        let _form = {...this.state.form};
        _form.description = event.target.value;
        this.setState({
            form: _form
        });                
    }

    onFormAmountInputHandler(event){
        let _form = {...this.state.form};        
        _form.amount = event.target.value;
        this.setState({
            form: _form
        });
    }      

    render() {
        return (
            <div className="container">
                <h3>MyWalletApp</h3><hr />
                <div className="row">
                    <div className="col-md-12 text-center">                        
                        <h1>US$ {this.state.money}</h1>
                        <TransferForm 
                            function={true}
                            onChangeDescription={(event) => this.onFormDescriptionInputHandler(event)}
                            onChangeAmount={(event) => this.onFormAmountInputHandler(event)}
                            onSumit={this.onSubmitHandler.bind(this)}/>
                        <hr />                        
                        <TransferList transfers={this.state.transfers} />                                                   
                    </div>
                </div>
            </div>
        );
    }
}


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
