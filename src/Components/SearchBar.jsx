import React from 'react'

//This component searchs for recent transactions
function SearchBar({searchValue, SetSearchfunction}) {

    //This function updates the search value
    function handleSearch(e){
        SetSearchfunction(e.target.value)
    }
    
        return (<>
            <input 
                type="text" 
                className="Search-Input"  
                placeholder="Search Your Recents Transactions..."
                value={searchValue}
                onChange={handleSearch}
            />
        </>
     )
    }
    
    export default SearchBar;