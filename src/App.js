import React, {useState} from 'react';

//Components
import Header from './components/header/Header'

//App.css
import './App.css';
import './components/Style.css'
import LocationList from './components/location/LocationList';
import Weather from './components/weather/Weather';

function App() {
	//Hook for the data loaded
	const [response, setResponse] = useState(null);
	const [geoPoint, setGeoPoint] = useState(null);

	//Point check
	const setPointAndCheck = (point) => {
		if (point)
			setGeoPoint(
				<Weather coords={point}/>
			)
		else 
			setGeoPoint(null);
	}

	//Status of the API key
	let apiStatus = localStorage.getItem("mapbox_API_key") ? true : false;

	//Return the data
	return (
		<div className="App">
			<Header siteName={"Mapbox"} updateResponse={setResponse} apiSetted={apiStatus}/>
			{apiStatus ?
				<div className="Content">
					{response ?
						<LocationList data={response} setPointAndCheck={setPointAndCheck}/>
					:
						<p><b>Search Something</b></p>
					}
					{geoPoint ?
						geoPoint
					:
						null
					}
				</div>
			:
				<div className="Content">
					<h3>Please enter your API key before using the aplication.</h3>
				</div>
			}
		</div>
	);
}

export default App;
