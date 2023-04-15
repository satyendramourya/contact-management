// Importing required modules
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Defining Country interface
interface Country {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

// Defining CovidMap functional component
const CovidMap: React.FC = () => {
    // Fetching data using useQuery hook from react-query library
    const { isLoading, isError, data } = useQuery<Country[]>('covidData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        return data;
    });

    // Displaying loading message if data is still being fetched
    if (isLoading) return <div className="text-center">Loading...</div>;

    // Displaying error message if there is an error while fetching data
    if (isError) return <div className="text-center">Error loading data</div>;

    // Defining marker icon using Leaflet's L.icon() method
    const markerIcon = L.icon({
        iconUrl: 'location-pin.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
    });


    // Rendering MapContainer and displaying markers for each country in fetched data
    return (
        <div className="h-screen">
            <MapContainer className="h-full" center={[0, 0]} zoom={2}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {data?.map((country) => (
                    <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]} icon={markerIcon}>
                        <Popup className="bg-white p-4 rounded-md shadow-md">
                            <div>
                                <h2 className="text-lg font-medium">{country.country}</h2>
                                <p className="text-sm font-medium">Active cases: {country.active}</p>
                                <p className="text-sm font-medium">Recovered cases: {country.recovered}</p>
                                <p className="text-sm font-medium">Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default CovidMap;
