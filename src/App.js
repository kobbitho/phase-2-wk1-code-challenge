import './App.css';
import React from 'react'
import TransactionTable from './Components/TransactionTable'

function App() {
  const TransactionRecords = [
    { 
      date: '2024-04-27',
      description: 'Grocery shopping at Naivas ', 
      category: 'Groceries',
      amount: 50.00,
    },
    {
      date: '2024-04-26',
      description: 'Movie tickets and popcorn', 
      category: 'Entertainment',
      amount: 20.00,
    },
    {
      date: '2024-04-25',
      description: 'Salary deposit for April', 
      category: 'Salary',
      amount: 2000.00,
    },
    {
      date: '2024-04-24',
      description: 'Payment for electricity bill', 
      category: 'Bills',
      amount: 150.00,
    },
    {
      date: '2024-04-23',
      description: 'Gas fill-up at Shell', 
      category: 'Transportation',
      amount: 35.75,
    },
  ];
  return (
    <div className="App">
      <div className='banktitle'>THE ROYAL BANK OF FLATIRON</div>
      <TransactionTable records={TransactionRecords}/>
  </div>
  )
};

export default App;
