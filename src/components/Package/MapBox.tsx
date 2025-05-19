'use client'
import React, { useEffect, useRef, useState } from 'react';
import {
    AdvancedMarker,
    APIProvider,
    ControlPosition,
    Map,
    MapControl,
    Marker,
    Pin,
    useMapsLibrary,
} from '@vis.gl/react-google-maps';

const MapBox = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const placesLib = useMapsLibrary('places');

    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 23.685,
        lng: 90.3563,
    });

    useEffect(() => {
        if (!placesLib || !inputRef.current || !window.google || !google.maps.places) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current!);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place)
            const location = place.geometry?.location;

            if (location) {
                setCenter({
                    lat: location.lat(),
                    lng: location.lng(),
                });
            }
        });
    }, [placesLib]);

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} libraries={['places']}>
            <Map mapId='48274b69296ca315e41f3c65'
                style={{ width: '92vw', height: '66vh', marginLeft: 'auto', marginRight: 'auto' }}
                center={center}
                defaultZoom={7}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <MapControl position={ControlPosition.TOP_LEFT}>
                    <div style={{ zIndex: 9999 }} className="ml-5 p-2 bg-white shadow-xl mt-3 rounded-[8px]">
                        <input
                            ref={inputRef}
                            placeholder="In Progress..."
                            type="text"
                            className="p-2 rounded-[6px] h-[42px] w-[315px] md:w-[440px] lg:w-[560px] border-2 placeholder:text-[16px]"
                        />
                    </div>
                </MapControl>
                <AdvancedMarker position={{ lat: 25.14, lng: 91.0975 }}>
                    <Pin />
                </AdvancedMarker>
                <AdvancedMarker position={{ lat: 21.4272, lng: 92.0058 }} >
                    <Pin />
                </AdvancedMarker>
                <AdvancedMarker position={{ lat: 22.7324, lng: 92.2985 }}>
                    <Pin />
                </AdvancedMarker>
                <AdvancedMarker position={{ lat: 22.1953, lng: 92.2184 }} >
                    <Pin />
                </AdvancedMarker>
            </Map>
        </APIProvider>
    );
};

export default MapBox;
