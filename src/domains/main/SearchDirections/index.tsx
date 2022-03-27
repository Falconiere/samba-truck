import { useGooglePlaces } from "apis/useGooglePlaces";
import { Box, Input } from "native-base";
import React from "react";

export function SearchDirections() {
  const { searchBy, results } = useGooglePlaces();

  return (
    <Box position="absolute" p="4" zIndex="1" w="100%" safeAreaTop>
      <Input
        placeholder="Para vai sua mercadoria?"
        onChangeText={text => searchBy(text)}
      />
    </Box>
  );
}
