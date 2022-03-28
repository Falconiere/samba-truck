export type ICoordinates = {
  lat: number;
  lng: number;
};

export type ILeg = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  end_address: string;
  end_location: ICoordinates;
  start_address: string;
  start_location: ICoordinates;
};

export type IRoutes = {
  legs: ILeg[];
};
export type IDirection = {
  routes: IRoutes[];
};

export type IPlaceAutocomplete = {
  description: string;
  place_id: string;
};

export type IAddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export type IGeometry = {
  location: {
    lat: number;
    lng: number;
  };
  location_type: string;
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};

export type IPlusCode = {
  compound_code: string;
  global_code: string;
};
export type IPlace = {
  address_components: IAddressComponent[];
  formatted_address: string;
  geometry: IGeometry;
  place_id: string;
  plus_code: IPlusCode;
  types: string[];
};
