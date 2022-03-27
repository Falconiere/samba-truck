import React from "react";

import { GoogleMap } from "domains/main/GoogleMap";
import { SearchDirections } from "domains/main/SearchDirections";

export function Main() {
  return (
    <>
      <SearchDirections />
      <GoogleMap />
    </>
  );
}
