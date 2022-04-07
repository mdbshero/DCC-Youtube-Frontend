import axios from "axios";



const SearchBar = (props) => {
    

    return ( 
        <div>
            <input type="text" name="Search" onChange={(e) => props.setQuery(e.target.value)} />
            <button type="submit">Search</button>
        </div>
     );
}
 
export default SearchBar;