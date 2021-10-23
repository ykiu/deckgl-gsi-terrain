import { Deck } from "@deck.gl/core";
import { TerrainLayer } from "@deck.gl/geo-layers";
import { TerrainLoader } from "@loaders.gl/terrain";
import loadTerrain from "./parse-terrain";
import "./styles.css";

new Deck({
  controller: true,
  canvas: "canvas",
  initialViewState: {
    latitude: 36.419274,
    longitude: 138.447078,
    zoom: 13,
    pitch: 65,
    bearing: 0
  },
  layers: [
    new TerrainLayer({
      texture:
        "https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg",
      id: "terrain",
      minZoom: 1,
      maxZoom: 14,
      strategy: "no-overlap",
      elevationDecoder: {
        scaler: 0.01,
        offset: 0
      },
      elevationData:
        "https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png",
      wireframe: false,
      color: [255, 255, 0],
      loaders: [
        {
          ...TerrainLoader,
          parse: loadTerrain,
          worker: false
        }
      ]
    })
  ]
});
