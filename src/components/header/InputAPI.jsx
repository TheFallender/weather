import React, {useState} from 'react';

//Style
import '../Style.css';

//Login JSX
const InputAPI = props => {
    //Hooks for managing the state of the typed text
    const [mapboxAPI, setMapboxAPI] = useState("");
    const [weatherAPI, setWeatherAPI] = useState("");

    //Return
    return (
        <div className="InputAPI">
            {!props.isSetted ?
                <form className="InputAPI_Form" onSubmit={(event) => {
                    localStorage.setItem("mapbox_API_key", mapboxAPI);
                    localStorage.setItem("weather_API_key", weatherAPI);
                }}>
                    <div style={{width: "100%"}}>
                        <label style={{marginRight: "10px"}}>Mapbox:</label>
                        <input 
                            className="InputAPI_Input"
                            type="text"
                            placeholder="Mapbox key"
                            value={mapboxAPI}
                            onChange={(event) => setMapboxAPI(event.target.value)}
                        />
                    </div>
                    <div style={{width: "100%"}}>
                        <label style={{marginRight: "10px"}}>Weather:</label>
                        <input 
                            className="InputAPI_Input"
                            type="text"
                            placeholder="OpenWether key"
                            value={weatherAPI}
                            onChange={(event) => setWeatherAPI(event.target.value)}
                        />
                    </div>
                    <button className="clickable" type="submit">Submit</button>
                    <input type="submit" hidden/>
                </form>
            :
                <button className="clickable"
                    onClick={(event) => {
                        localStorage.removeItem("mapbox_API_key");
                        localStorage.removeItem("weather_API_key");
                        window.location.reload(false);
                    }
                }>
                    Remove API key
                </button>
            }
        </div>
    );
}

export default InputAPI;