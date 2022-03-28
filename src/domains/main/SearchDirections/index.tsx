import React, { useState } from "react";
import { Box, FlatList, Input } from "native-base";

import { useAutocompletePlaces } from "apis/useAutocompletePlaces";
import { DirectionListItem } from "./DirectionListItem";

import { useGeocodePlace } from "apis/useGeocodePlace";
import { IPlace } from "types/maps";

type Props = {
  onSelectedLocation: (value?: IPlace) => void;
};
export function SearchDirections({ onSelectedLocation }: Props) {
  const { searchBy, clearResults, results } = useAutocompletePlaces();
  const { getPlaceInfo } = useGeocodePlace();
  const [value, setValue] = useState("");

  const handleOnGetPlaceInfo = (place_id: string) => {
    getPlaceInfo(place_id).then(data => {
      onSelectedLocation(data);
    });
  };

  return (
    <Box position="absolute" p="4" zIndex="1" w="100%" safeAreaTop>
      <Input
        placeholder="Para vai sua mercadoria?"
        onChangeText={text => {
          searchBy(text);
          setValue(text);
        }}
        value={value}
      />
      <FlatList
        data={results}
        bg="white"
        renderItem={({ item }) => (
          <DirectionListItem
            description={item.description}
            onPress={() => {
              handleOnGetPlaceInfo(item.place_id);
              setValue(item.description);
              clearResults();
            }}
          />
        )}
      />
    </Box>
  );
}
