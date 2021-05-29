import { FlyToInterpolator } from "react-map-gl";
export interface viewportObj {
  width: string | number;
  height: string | number;
  latitude: number;
  longitude: number;
  zoom: number;
  transitionDuration: any;
  transitionInterpolator: FlyToInterpolator;
  maxBounds: Array<Array<number>>;
  transitionEasing: Function;
}
