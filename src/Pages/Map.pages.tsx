import React, {
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { FlyToInterpolator } from "react-map-gl";
import * as d3 from "d3-ease";
import { viewportObj } from "../Interfaces/Map.interfaces";
import axios from "axios";
import MapBox from "../Components/MapBox.component";
import moment from "moment-timezone";
const Map: React.FC = () => {
  //** Search Text
  const [searchText, setSearchText] = useState("");
  //** suggestions
  const [suggestions, setSuggestions] = useState([]);
  //** Show Suggestions
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  //** Map Ref
  const mapRef = useRef<HTMLDivElement>(null);
  //** Map ViewPort
  const [viewport, setViewport]: [
    viewportObj,
    Dispatch<SetStateAction<viewportObj>>
  ] = useState<viewportObj>({
    width: "100vw",
    height: "90vh",
    latitude: 23.022505,
    longitude: 72.571365,
    zoom: 3,
    transitionDuration: 1000,
    transitionInterpolator: new FlyToInterpolator({
      speed: 2,
    }),
    transitionEasing: d3.easeCubic,
  });
  useEffect(() => {
    let cancel: Function;
    axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json`,
      params: {
        access_token:
          "pk.eyJ1IjoidmFraGFyaWFoZWV0IiwiYSI6ImNrazZtaGw4eTA1ZXUyd254NnNuZmhqZGwifQ.as8cVGH6NH9M1OHZw_Wjnw",
        autocomplete: true,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(({ data }) => {
        console.log(data);
        setSuggestions(data.features);
      })
      .catch((e) => console.log(e));
    return () => cancel();
  }, [searchText]);
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search Location"
        value={searchText}
        onChange={({ target }) => {
          setSearchText(target.value);
          setShowSuggestions(true);
        }}
      />
      {showSuggestions && (
        <div className="suggestions">
          {suggestions.map((suggestion: any) => (
            <button
              className="suggestion"
              onClick={() => {
                setShowSuggestions(false);
                setSearchText(suggestion.place_name);
                if (suggestion.bbox) {
                  (mapRef as any).current
                    .getMap()
                    .fitBounds(suggestion.bbox, { padding: 100 });

                  const {
                    center,
                    zoom,
                  } = (mapRef as any).current.getMap()._easeOptions;
                  setViewport({
                    ...viewport,
                    latitude: center.lat,
                    longitude: center.lng,
                    zoom,
                    transitionDuration: 5000,
                  });
                } else {
                  setViewport({
                    ...viewport,
                    latitude: suggestion.center[1],
                    longitude: suggestion.center[0],
                    zoom: 15,
                  });
                }
              }}
            >
              {suggestion.place_name}
              {"-----"}
            </button>
          ))}
        </div>
      )}
      <MapBox viewport={viewport} setViewport={setViewport} mapRef={mapRef} />
    </div>
  );
};

export default Map;
