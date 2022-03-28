import { useState } from "react";

import { GOOGLE_MAPS_API_KEY } from "helpers/constants";
import { axios } from "helpers/axios";
import { ICoordinates, IDirection } from "types/maps";

export function useDirectionInfo() {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getDirectionInfo = async (
    origin: ICoordinates,
    destination: ICoordinates,
  ): Promise<IDirection | undefined> => {
    try {
      if (isLoading) {
        return;
      }
      setIsLoading(true);

      const parameters = new URLSearchParams({
        origin: `${origin.lat},${origin.lng}`,
        destination: `${destination.lat},${destination.lng}`,
        key: GOOGLE_MAPS_API_KEY,
      }).toString();

      const url = `https://maps.googleapis.com/maps/api/directions/json?${parameters}`;
      const response = await axios.get(url).then(({ data }) => {
        return data;
      });
      setResult(response);
      setIsLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return { getDirectionInfo, result, isLoading };
}
