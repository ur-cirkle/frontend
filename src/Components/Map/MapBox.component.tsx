import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import useSupercluster from "use-supercluster";
import ReactMapGL, {
  Marker,
  FullscreenControl,
  NavigationControl,
  Popup,
} from "react-map-gl";
import { default as cities } from "./in.json";

import { viewportObj } from "../../Interfaces/Map.interfaces";
import { uid } from "uid";
export interface MapBoxProps {
  viewport: viewportObj;
  setViewport: Dispatch<SetStateAction<viewportObj>>;
  mapRef: React.RefObject<HTMLDivElement>;
}
const MapBox: React.FC<MapBoxProps> = ({ viewport, setViewport, mapRef }) => {
  //** Marker Points in GeoJson Format
  const [points, setPoints] = useState([]);
  //** Current marker popup
  const [popup, setPopup]: [string, Dispatch<SetStateAction<string>>] =
    useState<string>("");

  //** Map Bounds
  const bounds = (mapRef as any).current
    ? ((mapRef as any).current as any).getMap().getBounds().toArray().flat()
    : null;
  //** Clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });
  
useEffect(() => {
  if (!mapRef) return;
  console.log("hello");
   ((mapRef as any).current as any).getMap().on('load', function () {
    
    ((mapRef as any).current as any).getMap().addSource('route', {
      'type': 'geojson',
      'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
              'type': 'LineString',
              'coordinates': [
                  [-122.483696, 37.833818],
                  [-122.483482, 37.833174],
                  [-122.483396, 37.8327],
                  [-122.483568, 37.832056],
                  [-122.48404, 37.831141],
                  [-122.48404, 37.830497],
                  [-122.483482, 37.82992],
                  [-122.483568, 37.829548],
                  [-122.48507, 37.829446],
                  [-122.4861, 37.828802],
                  [-122.486958, 37.82931],
                  [-122.487001, 37.830802],
                  [-122.487516, 37.831683],
                  [-122.488031, 37.832158],
                  [-122.488889, 37.832971],
                  [-122.489876, 37.832632],
                  [-122.490434, 37.832937],
                  [-122.49125, 37.832429],
                  [-122.491636, 37.832564],
                  [-122.492237, 37.833378],
                  [-122.493782, 37.833683]
              ]
          }
      }
  });
  ((mapRef as any).current as any).getMap().addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round'
      },
      'paint': {
          'line-color': '#fff',
          'line-width': 8
      }
  });
    })
  
  
}, [mapRef]);


   //** Coverting data into GeoJson Format and storing it in points
  useEffect(() => {
    const arr = cities.map((city) => ({
      type: "Feature",
      properties: { cluster: false, id: uid(), category: "City" },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(city.lng), parseFloat(city.lat)],
      },
    }));
    setPoints(arr as any);
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      minZoom={1.5}
      attributionControl={false}
      className="mapboxComponent"
      onViewportChange={(nextViewport: viewportObj) =>
        setViewport(nextViewport)
      }
<<<<<<< HEAD:src/Components/MapBox.component.tsx
      mapStyle="mapbox://styles/heet-vakharia/ckeuzr84tak0719oc1kgj5c3m"
      mapboxApiAccessToken=""
=======
      mapStyle="mapbox://styles/vakhariaheet/ckk6l2vh10t0217qbqrq5sgot"
      mapboxApiAccessToken="pk.eyJ1IjoiaGVldC12YWtoYXJpYSIsImEiOiJja2V1ejJzam0zenRwMnNwYzVnOHRpb3RsIn0.ucjS-K-34-JJgvlfAbHmCw"
>>>>>>> 26d2f6f91d3b480f249a6abff63965a72908976f:src/Components/Map/MapBox.component.tsx
      ref={mapRef as any}
    >
      <FullscreenControl style={{ right: 10, top: 10 }} />
      <NavigationControl style={{ right: 10, top: 50 }} />
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;
        if (isCluster) {
          //* cluster
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div
                className="cluster-marker"
                style={{
                  width: `${10 + (pointCount / points.length) * 20}px`,
                  height: `${10 + (pointCount / points.length) * 20}px`,
                }}
                onClick={() => {
                  const expansionZoom = Math.min(
                    (supercluster as any).getClusterExpansionZoom(cluster.id),
                    20
                  );

                  setViewport({
                    ...viewport,
                    latitude,
                    longitude,
                    zoom: expansionZoom,
                  });
                }}
              >
                {pointCount}
              </div>
            </Marker>
          );
        }
        return (
          // Marker;
          <>
            <Marker latitude={latitude} longitude={longitude}>
              <>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALBSURBVEiJlZU9aFNRFMd/5+WjbZK2aDRWrdL6LSiC1EUXJeBgFHERcRG6Cy4KFUUHXUTo4uYmOugg6CBorREHQUXcKhZMqtDaVqvVNm2a9N3jEPOa5L3XxD88uOfr/z/3vnfPE1VlWWxI7cbICdAekJ7hltk1IbW+h4wMhdW6lRgZeLhcufgKyKEg66IXgUtAqOweiswspQCti8H0IuZIVzadb1wgcTJGOPcClX21oUqBMpqNlYtp2+ZE5tFEbSzo2X1o7kYVuQB7OmBnnHhhhHw2R+7TDPzrLW+ZaHBxdhDYVX8HnceSqA78o4VEFPoOwN6OUnziLQC5j38Yu52l+LPglK60w+c7MgM3K+ksV/eqfQ55QODawSXyCkR3ttF5dgsSEMc3L3ZfbV61gIgAPY59eDNsj7vIy2jpjtK+fyleELMCkSrOaoHOo1uAdsfenfAlLyOyNeasbVGZ7E4m/QVsrT6L1nBdASta/Z0YY23zF2jKvQMWHHt4qq5AfmTOWQuQl+I9f4HSZXnt2M8yMFf0JTd5m9+vfzh2s7F+dWXT0/4CpTYGnfVEDvrfQNF2pemi8u3OF4pTS59pUAPva/PcF83oXUQuA03OLj5NweldsGMVC7/mmc/kmHoyzsLYfEVf0GT0iqtfz1HRebQf5Zw74D0qAGJ28MPGzODeWr/7iADUug788Yx5IKBoROSUV8xbYPTxD4SbnjEPRO1getXn58ONCwAUIv2AazrWIqhiwhI77Rf3F5h8MIvI1XoCETt032tMl+H/w4HSbFqbeoFwsOyqfMnNxprelHkZR9X4UfjvAEBVMVYvMOsqVLSlGD6+HHl9AYDxx1mEC7XuVjt0f+3Xp6/qlS9/RE6WCOtSA0ByKDJDiwn87M6kV9frHhrZAZSOCqsXmLEUbTeBVCPkTm3Dz/rUmdHu5O3/qfkLSp9EXQUDoQkAAAAASUVORK5CYII="
                  alt=""
                  onClick={() =>
                    popup === cluster.properties.id
                      ? setPopup("")
                      : setPopup(cluster.properties.id)
                  }
                />
              </>
            </Marker>
            {popup === cluster.properties.id && (
              <Popup
                latitude={latitude}
                longitude={longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopup("")}
                anchor="bottom"
                offsetLeft={13}
                offsetTop={5}
              >    
                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                <div style={{ backgroundColor: "white" }}>Hello</div>
              </Popup>
            )}
          </>
        );
      })}
    </ReactMapGL>
  );
};

export default MapBox;
