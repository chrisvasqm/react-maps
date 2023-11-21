import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapContainer() {
    const style = {
        height: '600px',
        width: '600px',
    };

    const position = {
        lat: 18.483402,
        lng: -69.929611,
    };

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={style}
                zoom={8}
                center={position}
            >
                <Marker position={position} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
