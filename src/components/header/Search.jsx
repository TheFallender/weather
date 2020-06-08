import React, {useState} from 'react';
import mapboxAPI, {baseParams} from '../../apis/mapboxAPI';

//Style
import '../Style.css';


//Login JSX
const Search = props => {
    //Hooks for managing the state of the typed text
    const [typedSearch, setTypedSearch] = useState("");

    //Handler to call the Query
    const submitHandler = (event) => {
        //Prevent page change
        event.preventDefault();

        //Lazy request the query
        mapboxAPI.get('/geocoding/v5/mapbox.places/' + typedSearch + '.json', {
            params: {
                ...baseParams,
                autocomplete: false,
                limit: 5,
            }
        }).then(response => {
            props.updateResponse(response);
        }).catch(() => {
            alert("ERROR - WRONG TOKEN FOR MAPBOX");
        });

        //Prevent page change
        return false;
    }

    //Return
    return (
        <div className="Search">
            <form className="SearchForm" onSubmit={(event) => submitHandler(event)}>
                <label>Search:</label>
                <input
                    className="SearchInput"
                    type="text"
                    placeholder="Something"
                    value={typedSearch}
                    onChange={(e) => setTypedSearch(e.target.value)}/>
                <button className="SearchButton clickable" type="submit">Submit</button>
                <input type="submit" hidden/>
            </form>
        </div>
    );
}



export default Search;