import React from "react";
import { Box, Pressable, Text } from "native-base";

type Props = {
  onPress: () => void;
  description: string;
};
export function DirectionListItem(props: Props) {
  const { onPress, description } = props;
  return (
    <Pressable onPress={onPress}>
      <Box bg="white" p="4" borderBottomWidth={1} borderBottomColor="lightgray">
        <Text>{description}</Text>
      </Box>
    </Pressable>
  );
}
