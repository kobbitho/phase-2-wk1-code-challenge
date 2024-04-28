import React from 'react';
import TransactionRow from './TransactionRow';
import { useState } from 'react';
import AddTransaction from './Addtransactions';
import SearchBox from './SearchBar';

//This function takes an array of records as a prop and renders a table with columns for date, description, category, and amount.
function TransactionTable({records}) {
  /*
  *The stateRecords state variable is used to store the array of 
  *records that are being displayed in the TransactionTable component.
  */
  const [stateRecords, setStateRecs] = useState(records);
  const [searchValue, setSearch] = useState("");//searchValue stores the search value entered by the user
  
      const rows = [];
        stateRecords.forEach((data,) => {
         if(data.description.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
          return;
         } 
  
    rows.push( < TransactionRow 
        key={data.index}
          date={data.date} 
          description={data.description}
          category={data.category}
          amount={data.amount}
          />
     )
  });
  return (
    <>
      <SearchBox searchValue={searchValue} SetSearchfunction={setSearch} />
      <AddTransaction SetDatafunction={setStateRecs} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
  
  export default TransactionTable;