import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export function Map({station}) {

    let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

    return(
        <MapContainer center={[station.y, station.x]} zoom={16} scrollWheelZoom={false} style={{ height:"400px",marginTop:"10px", marginBottom:'10px'
    }}  >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[station.y, station.x]}>
            <Popup>
            {station.Nimi}
            </Popup>
            </Marker>
        </MapContainer>
    )
}
