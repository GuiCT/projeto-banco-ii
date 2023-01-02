import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import { useEffect, useState, useRef, useMemo } from "react";
import "leaflet/dist/leaflet.css";

interface Coordinates {
  lat: number;
  lng: number;
}

interface LeafletMapWithDraggableMarkerProps {
  center: Coordinates;
}

export default function LeafletMapWithDraggableMarker({ center } : LeafletMapWithDraggableMarkerProps) {
  const [position, setPosition] = useState(center);
  const icon = Leaflet.icon({ iconUrl: "/marker-icon.png" });

  function DraggableMarker() {
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            // @ts-ignore
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
  
    return (
      <Marker
        icon={icon}
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          {/* <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span> */}
        </Popup>
      </Marker>
    )
  }

  useEffect(() => {
    setPosition(center);
  }, [center]);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  )
}