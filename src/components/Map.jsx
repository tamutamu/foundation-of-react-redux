import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

const Map = props => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div />)}
  />
);

export default Map;
