import React from 'react';
import {
  StyleSheet, Modal, View, TouchableOpacity, TouchableHighlight, Text, Dimensions, TextInput
} from 'react-native';
import { MapView } from 'expo';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      region: this.getInitialState().region,
      markers: [],
      modalVisible: false,
      username: "",
      distance: ""
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getInitialState() {
    return {
      region: {
        latitude: 55.769918,
        longitude: 12.511906,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }

  onRegionChange(region) {
    if (this.state === undefined || region === undefined) return;
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          customMapStyle={MapStyle.styles} >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => { alert("Modal has been closed.") }} >
          <View style={styles.overlay}>
            <Text style={{ fontSize: 20, color: '#fafafa', marginBottom: 10 }}>Login</Text>

            <Text style={{ color: '#fafafa' }}>Username:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
            <Text style={{ color: '#fafafa' }}>Distance(in kilometers):</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(distance) => this.setState({ distance })}
              value={this.state.distance}
            />

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => this.setModalVisible(false)}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => this.setModalVisible(true)}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  button: {
    width: "60%",
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: "rgba(102,51,153,0.5)"
  },
  buttonContainer: {
    width: "100%",
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fafafa"
  },
  textInput: {
    backgroundColor: '#222',
    color: '#fafafa',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingTop: 22
  }
});

const MapStyle = {
  styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]
};

