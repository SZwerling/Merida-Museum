import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.966747,
      lng: -89.621205
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="col">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9Adky2fxoJx9DQT7blf1R2NRABfTS2d0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={20.966747}
            lng={-89.621205}
            text="The City Museum"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default SimpleMap;








    

//AIzaSyC9Adky2fxoJx9DQT7blf1R2NRABfTS2d0