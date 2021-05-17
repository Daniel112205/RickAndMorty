import { useState } from "react"

const Search = ({handleSearch}) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <input placeholder="Search for Id Location" value={value} onChange={e => setValue(e.target.value)}/>
            <button className="btn" onClick={() => handleSearch(value)}>
                Search
            </button>
        </div>
    );
}
export default Search;