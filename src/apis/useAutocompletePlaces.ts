import { useState } from "react";
import { axios } from "helpers/axios";
import { GOOGLE_MAPS_API_KEY } from "helpers/constants";
import { useCurrentLocation } from "helpers/geolocation";
import { IPlaceAutocomplete } from "types/maps";

export function useAutocompletePlaces() {
  const { location } = useCurrentLocation();
  const [results, setResults] = useState<IPlaceAutocomplete[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBy = (input: string) => {
    let obj = {
      input,
      language: "pt_BR",
      components: "country:br",
      key: GOOGLE_MAPS_API_KEY,
    };
    if (location) {
      obj = { ...obj, ...location };
    }

    const parameters = new URLSearchParams(obj).toString();
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?${parameters}`;

    if (isLoading) {
      return;
    }
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        setResults(res.data?.results ?? res.data?.predictions ?? []);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return {
    searchBy,
    results,
    isLoading,
    clearResults: () => setResults([]),
  };
}
