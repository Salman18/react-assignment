import React from 'react';
import './search.css';


function Search({searchValue, setSearchValue}) {

    const handelInputChnage = (event) => {
        let value = event.target.value;
        setSearchValue(value);
    };

    return (
        <div className='container'>
            <input
                placeholder='Search Items'
                type="text"
                value={searchValue}
                onChange={handelInputChnage}
                className="search"
            />
        </div>
    )

}

export default Search;
