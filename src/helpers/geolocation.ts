import { useEffect, useState } from "react";
import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from "react-native-get-location";

export async function getCurrentLocation(): Promise<Location> {
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  });
  return location;
}

export function useCurrentLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<LocationErrorCode | null>();

  useEffect(() => {
    (async () => {
      try {
        const _location = await getCurrentLocation();
        setLocation(_location);
      } catch (err) {
        if ((err as LocationError)?.code) {
          setError((err as LocationError).code as LocationErrorCode);
        }
      }
    })();
  }, []);
  return { location, error };
}
