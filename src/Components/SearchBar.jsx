import React from 'react'


function SearchBar({searchValue, funcSetSearch}) {

    function handleSearch(e){
        funcSetSearch(e.target.value)
    }
    
        return (<>
            <input 
                type="text" 
                className="SearchInput"  
                placeholder="Search Your Recents Transactions..."
                value={searchValue}
                onChange={handleSearch}
            />
        </>
     )
    }
    
    export default SearchBar;