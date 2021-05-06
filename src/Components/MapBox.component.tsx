import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import useSupercluster from "use-supercluster";
import ReactMapGL, {
  Marker,
  FullscreenControl,
  NavigationControl,
  Popup,
} from "react-map-gl";
import { default as cities } from "./in.json";

import { viewportObj } from "../Interfaces/Map.interfaces";
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
  const [popup, setPopup]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");

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
      minZoom={1}
      attributionControl={false}
      className="mapboxComponent"
      onViewportChange={(nextViewport: viewportObj) =>
        setViewport(nextViewport)
      }
      mapStyle="mapbox://styles/heet-vakharia/ckeuzr84tak0719oc1kgj5c3m"
      mapboxApiAccessToken="pk.eyJ1IjoiaGVldC12YWtoYXJpYSIsImEiOiJja2V1ejJzam0zenRwMnNwYzVnOHRpb3RsIn0.ucjS-K-34-JJgvlfAbHmCw"
      ref={mapRef as any}
    >
      <FullscreenControl style={{ right: 10, top: 10 }} />
      <NavigationControl style={{ right: 10, top: 50 }} />
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount,
        } = cluster.properties;
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
