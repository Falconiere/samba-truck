import { Box, Input } from "native-base";
import React from "react";

export function SearchDirections() {
  return (
    <Box position="absolute" p="4" zIndex="1" w="100%" safeAreaTop>
      <Input placeholder="Para vai sua mercadoria?" />
    </Box>
  );
}
