import { useState } from "react";

const SearchBar = () => {
  
  const [searchValue, setSearchValue] = useState('');

  const submitSearch = () => {
    console.log(searchValue);

    setSearchValue('');
  }
  
  return (
    <div className="flex items-center gap-2 bg-gray-900 rounded-md p-1 text-white w-full">
      <input 
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="flex w-full p-2 rounded-md text-gray-900"
      />

      <button onClick={submitSearch} className="pr-2 text-center">Submit</button>

    </div>
  )
};

export default SearchBar;