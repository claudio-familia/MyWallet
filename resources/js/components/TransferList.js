import React from 'react'

const TransferList = (props) => (
        <table className="table table-stripped">
            <thead className="bg-dark text-white">
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.transfers.map((item) => (
                    <tr key={item.id}>
                        <td>{item.description}</td>
                        <td className={item.amount < 0 ? "text-danger" : "text-success"}><b>{item.amount}</b></td>
                    </tr>
                ))}
            </tbody>            
        </table>
    );



 export default TransferList;

