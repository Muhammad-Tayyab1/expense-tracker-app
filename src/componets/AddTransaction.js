import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext); 

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
      
     addTransaction( newTransaction );
    }
    return (
        <>
         <h3 className="h">Add new Transaction</h3> 

         <form onSubmit={onSubmit}>
             <div className="form-control">
                 <label htmlFor="text">Text</label>
                 <input type="text" required value={text} onChange={(e) => setText(e.target.value)}
                  placeholder="Enter product name..."/>
             </div>
             <div className="form-control">
                 <label htmlFor="amount"> 
                 Amount <br />
                 (negative - expense, positive - income)</label>  

                 <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)}
                 placeholder="Enter price..." />

             </div>
             <button className="btn"> Add Transaction</button>
             </form>  
        </>
    )
}
