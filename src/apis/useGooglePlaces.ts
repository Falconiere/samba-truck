import { useState } from "react";
import { http } from "helpers/http";
import { GOOGLE_MAPS_API_KEY } from "helpers/constants";

export function useGooglePlaces() {
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchBy = (text: string) => {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${GOOGLE_MAPS_API_KEY}`;
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    http.get(url).then(({ data }) => {
      setResults(data?.predictions);
      setIsLoading(false);
    });
  };
  return {
    searchBy,
    results,
  };
}
