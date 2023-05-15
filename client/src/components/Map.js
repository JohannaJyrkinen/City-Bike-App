import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function Map({station}) {

    return(
        <MapContainer center={[station.y, station.x]} zoom={13} style={{ height:"400px",marginTop:"10px", marginBottom:'20px'
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
