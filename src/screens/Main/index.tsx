import React from "react";

import { GoogleMap } from "domains/main/GoogleMap";
import { SearchDirections } from "domains/main/SearchDirections";
import { ICoordinates, IPlace } from "types/maps";
import { useDirectionInfo } from "apis/useDirectionInfo";
import { ActionSheetInfo } from "domains/main/ActionSheetInfo";

export function Main() {
  const [destination, setDestination] = React.useState<IPlace>();
  const [info, setInfo] = React.useState<{
    distanceText: string;
    durationText: string;
  }>();

  const { getDirectionInfo } = useDirectionInfo();

  const onReadyMapDirections = (ori: ICoordinates, des: ICoordinates) => {
    getDirectionInfo(ori, des).then(data => {
      if (!data?.routes?.[0]) {
        return;
      }
      setInfo({
        distanceText: data?.routes[0].legs[0].distance.text,
        durationText: data?.routes[0].legs[0].duration.text,
      });
    });
  };

  return (
    <>
      <SearchDirections onSelectedLocation={setDestination} />
      <GoogleMap destination={destination} onReadyMapDirections={onReadyMapDirections} />
      <ActionSheetInfo info={info} onClose={() => setInfo(undefined)} />
    </>
  );
}
