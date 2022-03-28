import React, { useRef } from "react";
import { Dimensions } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { useCurrentLocation } from "helpers/geolocation";
import { GOOGLE_MAPS_API_KEY } from "helpers/constants";
import { ICoordinates, IPlace } from "types/maps";

type Props = {
  destination?: IPlace;
  onReadyMapDirections: (origin: ICoordinates, destination: ICoordinates) => void;
};

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export function GoogleMap(props: Props) {
  const mapRef = useRef<MapView>(null);
  const { destination, onReadyMapDirections } = props;
  const { location } = useCurrentLocation();

  const currentLocation = {
    latitude: location?.latitude ?? 37.78825,
    longitude: location?.longitude ?? -122.4324,
  };

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}>
      <Marker
        coordinate={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        }}
      />
      {destination && (
        <Marker
          coordinate={{
            longitude: destination.geometry.location.lng,
            latitude: destination.geometry.location.lat,
          }}
        />
      )}

      {destination && (
        <MapViewDirections
          apikey={GOOGLE_MAPS_API_KEY}
          origin={currentLocation}
          destination={{
            longitude: destination.geometry.location.lng,
            latitude: destination.geometry.location.lat,
          }}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={["#7F0000"]}
          strokeWidth={6}
          optimizeWaypoints={true}
          onReady={result => {
            onReadyMapDirections(
              {
                lat: currentLocation.latitude,
                lng: currentLocation.longitude,
              },
              {
                lat: destination.geometry.location.lat,
                lng: destination.geometry.location.lng,
              },
            );
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20,
              },
            });
          }}
        />
      )}
    </MapView>
  );
}
