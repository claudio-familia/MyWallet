import React from 'react'

const TransferForm = props => (
    <form onSubmit={props.onSumit} className="row">
        <div className="input-field col-sm-12 col-md-4">    
            <i className="material-icons prefix">local_offer</i>                    
            <input placeholder="Type a description" required onChange={props.onChangeDescription} value={props.descriptionInput} id="description" type="text" className="validate" />
            <label htmlFor="description">Description</label>
        </div>
        <div className="input-field col-sm-12 col-md-4">  
            <i className="material-icons prefix">attach_money</i>                                          
            <input placeholder="Type the amount" required onChange={props.onChangeAmount} value={props.amountInput} id="amount" type="number" className="validate" />
            <label htmlFor="amount">Amount</label>
        </div> 
        <div className="col-sm-12 col-md-4 text-white text-left">  
            <button type="submit" className="waves-effect waves-light btn" style={{'marginTop': '20px'}}>
                Save 
                <i className="material-icons right">save</i>
            </button>
        </div>       
    </form>

);

export default TransferForm;