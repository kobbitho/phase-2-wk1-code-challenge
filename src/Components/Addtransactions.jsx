import React from 'react';
import {useState} from 'react';
/*
 AddTransaction component allows users to add a new transaction to the list.
 It takes a SetDatafunction prop,
 The SetDataFunction updates the state of the parent component with the new transaction.
 */
function AddTransaction({SetDatafunction }) {

    /*useState hook is used to manage the local state of the component.
     * It returns an array containing the current state value and a function to update it.
     */ 
    const [indate, setDate] = useState("")
    const [indescription, setDescription] = useState("")
    const [incategory, setCategory] = useState("")
    const [inamount, setAmount] = useState("")
/*This function is called when the form is submitted
   It prevents the default  form submission behavior, creates a new transaction object,
   updates the state of the parent component with the new transaction, and resets the input fields.  
*/
    function handleSubmit(e){
      e.preventDefault();
      let newTransaction = {
        id: Math.floor(Math.random() * 200),
        date: indate,
        description: indescription,
        category: incategory,
        amount: parseFloat(inamount),
      }
      SetDatafunction(InstateRecords => [...InstateRecords, newTransaction])
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
    }

  return (
    <div className='Transaction'>
        <form onSubmit={handleSubmit}>
            <input type="date" required value={indate}  name='date'   onChange={(e) => setDate(e.target.value)} />

              <input type="text" 
              required
              placeholder='Description'   
              name='Description'
              value={indescription} 
              onChange={(e) => setDescription(e.target.value)}
              />

              <input type="text" required placeholder='Category'    name='category'  onChange={(e) => setCategory(e.target.value)} value={incategory}/>
              <input type="number" required placeholder='Amount'     name='amount' onChange={(e) => setAmount(e.target.value)}  value={inamount}/>
          
              <button>Add Transaction</button>
          </form>
      </div>
  );
}

export default AddTransaction;