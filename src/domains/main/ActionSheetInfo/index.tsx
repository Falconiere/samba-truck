import React from "react";
import { Actionsheet, Box, Text, useDisclose } from "native-base";

type Props = {
  info?: {
    distanceText: string;
    durationText: string;
  };
  onClose: () => void;
};
export function ActionSheetInfo({ info, onClose: _onClose }: Props) {
  const { onClose } = useDisclose();
  return (
    <Actionsheet
      isOpen={!!info}
      disableOverlay
      size="full"
      onClose={() => {
        onClose();
        _onClose();
      }}>
      <Actionsheet.Content>
        <Box safeAreaBottom>
          <Text>Distancia: {info?.distanceText}</Text>
          <Text>Duração: {info?.durationText}</Text>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
