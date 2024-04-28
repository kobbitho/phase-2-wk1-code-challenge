import React from 'react';
import TransactionRow from './TransactionRow';
import { useState } from 'react';
import AddTransaction from './Addtransactions';
import SearchBox from './SearchBar';
function TransactionTable({records}) {
    const [stateRecords, setStateRecs] = useState(records);
    const [searchValue, setSearch] = useState("");
  
      const rows = [];
        stateRecords.forEach((data,index) => {
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
  })
      return (<>
        <SearchBox searchValue={searchValue} funcSetSearch={setSearch} />
        <AddTransaction funcSetData={setStateRecs} />
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