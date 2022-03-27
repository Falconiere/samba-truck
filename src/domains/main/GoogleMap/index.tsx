import React, { useMemo } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { useCurrentLocation } from "helpers/geolocation";

export function GoogleMap() {
  const { location } = useCurrentLocation();

  const currentLocation = useMemo(
    () => ({
      latitude: location?.latitude ?? 37.78825,
      longitude: location?.longitude ?? -122.4324,
    }),
    [location],
  );

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      region={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        }}
      />
    </MapView>
  );
}
