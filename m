import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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



const CovidMap: React.FC = () => {
    const { isLoading, isError, data } = useQuery<Country[]>('covidData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        return data;
    });

    if (isLoading) return <div className="text-center">Loading...</div>;

    if (isError) return <div className="text-center">Error loading data</div>;

    const markerIcon = L.icon({
        iconUrl: 'location-pin.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
    });

    return (
        <div className="h-screen">
            <MapContainer className="" center={[0, 0]} zoom={2}>
                <TileLayer
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=kUceROTAb2mxAhPtV5Za"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
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
};

export default CovidMap;
