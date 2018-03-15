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
        let markers = []
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.509865, lng: -0.118092},
          zoom: 10,
          mapTypeId: 'roadmap',
        });

       const placeMarkerAndPanTo = (latLng, map)=>{
           var marker = new window.google.maps.Marker({
                position: latLng,
                map: map
       });
       markers.push(marker)
       map.panTo(latLng);
   }
        map.addListener('click', (e) => {
          if (markers.length < 1){
        placeMarkerAndPanTo(e.latLng, map);
        this.props.userLocation(e.latLng.lat(),  e.latLng.lng())
          }
          else {
            deleteMarkers()
          }
     });
        const setMapOnAll = (map) =>  {
          for (let i = 0; i < markers.length; i++) {
           markers[i].setMap(map);
      }
    }
        const clearMarkers = () =>{
           setMapOnAll(null);
    }
          const  deleteMarkers = () => {
            clearMarkers();
              markers = []
    }
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