import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    constructor() {
        super();
        this.state = {
          zoom: 10,
          maptype: 'roadmap',
          place_formatted: '',
          place_id: '',
          place_location: '',
        };
      }
    
      componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.509865, lng: -0.118092},
          zoom: 10,
          mapTypeId: 'roadmap',
        });

        function placeMarkerAndPanTo(latLng, map) {
            var marker = new window.google.maps.Marker({
                   position: latLng,
                       map: map
       });
       map.panTo(latLng);
   }
        map.addListener('click', (e) => {
        placeMarkerAndPanTo(e.latLng, map);
     });
    
        map.addListener('zoom_changed', () => {
          this.setState({
            zoom: map.getZoom(),
          });
        });
    
        map.addListener('maptypeid_changed', () => {
          this.setState({
            maptype: map.getMapTypeId(),
          });
        });
    
        let marker = new window.google.maps.Marker({
          map: map,
          position: {lat: -33.8688, lng: 151.2195},
        });
    
        let inputNode = document.getElementById('pac-input');
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
        let autoComplete = new window.google.maps.places.Autocomplete(inputNode);
    
        autoComplete.addListener('place_changed', () => {
          let place = autoComplete.getPlace();
          let location = place.geometry.location;
    
          this.setState({
            place_formatted: place.formatted_address,
            place_id: place.place_id,
            place_location: location.toString(),
          });
    
          
          map.fitBounds(place.geometry.viewport);
          map.setCenter(location);
    
          marker.setPlace({
            placeId: place.place_id,
            location: location,
          });
        });
      }
    
      render() {
        return (
          <div id='app'>
            <div id='map' />
            <div id='pac-container'>
                <input id='pac-input' type='text' placeholder='Enter a location' />
            </div>
          </div>
        );
      }
    };

export default Map;