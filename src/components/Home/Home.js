import React, { useRef, useState } from 'react';
import logo from "../../images/Graviti Logo 1.svg";
import location from "../../images/placeholder 1.svg";
import { Form, Head, Image, Location, Main, MapInfo } from './Home.style';
import { GoogleMap, useJsApiLoader,Autocomplete, Marker} from '@react-google-maps/api';

const libraries=["places"];

const Home=()=>{

    const [map, setMap] = useState(/** @type google.maps.map */ (null));
    // const [origin, setOrigin] = useState("");
    // const [destination, setDestination] = useState("");
    // const [direction, setDirection] = useState(null);
    const [distance,setDistance] = useState("");

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
        libraries: libraries,
    });

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const containerStyle = {
        width: "100%",
        height:"100%",
    };
      
    const panMap=(e)=>{
        e.preventDefault();
        calculateRoute();
    }

    const calculateRoute= async ()=>{
        if(originRef.current.value==="" && destinationRef.current.value===""){
            map.panTo(center);
            return;
        }

        // eslint-disable-next-line no-undef
        var directionsService = new google.maps.DirectionsService();
        // eslint-disable-next-line no-undef
        var directionsRenderer = new google.maps.DirectionsRenderer();

        var request = {
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: 'DRIVING',
        };

        directionsService.route(request,await function(result, status) {
            if(status === 'OK') {
              directionsRenderer.setDirections(result);
            //   console.log(result);
              setDistance(result.routes[0].legs[0].distance.text);
            }
            else{
                alert("No Results in Google Maps API. Type other inputs");
            }
        });
        directionsRenderer.setMap(map);
        // console.log(distance);
        // setDirectionResponse()
    }

    if(!isLoaded) {
        return <div>Loading...</div>
    };

    return (
      <>
        <div>
            <Image src={logo} alt='logo'/>
        </div>
        <Main>
            <Head>Let's calculate <span className='highlight'>distance</span> from Google maps</Head>
            <MapInfo>
                <Form>
                    <form>
                        <div className='inputField'>
                            <label className='label'>Origin</label>
                            <div className='origin'>
                                <Location src={location}/>
                                <Autocomplete>
                                    <input type="text" className='input' ref={originRef}></input>
                                </Autocomplete>
                            </div>
                            <label className='label'>Destination</label>
                            <div className='destination'>
                                <Location src={location}/> 
                                <Autocomplete>
                                    <input type="text" className='input' ref={destinationRef}></input>
                                </Autocomplete>
                            </div>
                        </div>
                        <button className='calc' onClick={(e) => panMap(e)}>Calculate</button>
                    </form>
                    <div  className='distanceField'>
                        <div>Distance</div>
                        <input type="text" className='distance' value={distance} readOnly></input>
                    </div>
                    {(originRef.current && originRef.current.value!=="") && (destinationRef.current && destinationRef.current.value!=="") ?
                        <div className='distanceText'>The distance between <span className='distHighlight'>{originRef.current && originRef.current.value}</span> and <span className='distHighlight'>{destinationRef.current && destinationRef.current.value}</span> is <span className='distHighlight'>{distance}</span></div>
                        : <></>
                    } 
                </Form>
                <div className="googleMap">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        options={{
                            zoomControl:false,
                            streetViewControl:false,
                            mapTypeControl:false,
                            fullscreenControl:false,
                        }}
                        onLoad={map => setMap(map)}
                        // onUnmount={onUnmount}
                    >
                        <Marker position={center}/>
                    </GoogleMap>
                </div>
            </MapInfo>
        </Main>
      </>
    )
};

export default Home;