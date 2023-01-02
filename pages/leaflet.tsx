import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import dynamic from 'next/dynamic';

export default function LeafletPage() {
    // Centro do mapa será no câmpus da FCT Unesp
    const center = {
        lat: -22.121097420709766,
        lng: -51.40745175535888
    }

    const Map = dynamic(
        () => import('../components/LeafletMapWithDraggableMarker'),
        { ssr: false }
    )   

    return (
        <>
            <h1>Exemplo de mapa do Leaflet:</h1>
            <div style={{width: '500px', height: '500px'}}>
                <Map center={center}/>
            </div>
        </>
    )
}