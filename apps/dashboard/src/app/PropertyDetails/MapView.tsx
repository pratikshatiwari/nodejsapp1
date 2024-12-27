import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import location2 from '../../assets/location_current.svg';
import location from '../../assets/location_image 1.png';  
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DefaultIcon = L.Icon.Default as any;
delete DefaultIcon.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
 
 
const currentLocationIcon = new L.Icon({
  iconUrl: location2,
  iconSize: [35, 45],  
  iconAnchor: [17, 45],
  popupAnchor: [1, -34],
  shadowSize: [45, 45],
});
 
 
const nearbyLocationIcon = new L.Icon({
  iconUrl: location,
  iconSize: [35, 45],  
  iconAnchor: [17, 45],
  popupAnchor: [1, -34],
  shadowSize: [45, 45],
});
 
const LocationMarker = () => {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMap();
 
  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.setView(e.latlng, 13);
    });
  }, [map]);
 
  return position === null ? null : (
    <Marker position={position} icon={currentLocationIcon}>
      <Popup>
        You are here.
        <img src="https://via.placeholder.com/150" alt="Current Location" style={{ width: '100%' }} />
      </Popup>
    </Marker>
  );
};
 
const nearbyLocations = [
  { lat: 22.969, lng: 76.055, label: 'Nearby Location 1' },
  { lat: 22.968, lng: 76.058, label: 'Nearby Location 2' },
  { lat: 22.965, lng: 76.052, label: 'Nearby Location 3' },
  { lat: 22.962, lng: 76.056, label: 'Nearby Location 4' },
  { lat: 22.961, lng: 76.054, label: 'Nearby Location 5' },
];
 
const MapView = () => {
  return (
    <MapContainer center={[22.9676, 76.0534]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      {nearbyLocations.map((location, idx) => (
        <Marker key={idx} position={[location.lat, location.lng]} icon={nearbyLocationIcon}>
          {/* <Popup>
            <img src={location2} alt="Location" />
            <p>{location.label}</p>
          </Popup> */}
        </Marker>
      ))}
    </MapContainer>
  );
};
 
export default MapView;