import { useState } from "react";

import { axios } from "helpers/axios";
import { GOOGLE_MAPS_API_KEY } from "helpers/constants";
import { IPlace } from "types/maps";

export function useGeocodePlace() {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getPlaceInfo = async (place_id: string): Promise<IPlace | undefined> => {
    try {
      if (isLoading) {
        return;
      }
      setIsLoading(true);

      const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=${GOOGLE_MAPS_API_KEY}`;
      const res = await axios.get(url).then(response => {
        return response.data;
      });
      const response = res?.results?.[0];
      setResult(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  };

  return { getPlaceInfo, result, isLoading };
}
