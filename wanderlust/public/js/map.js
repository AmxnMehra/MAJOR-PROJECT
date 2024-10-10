mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", //container id
  style: "mapbox://style/mapbox/streets-v12",
  center: coordinates, //starting position [lng, lat]
  zoom: 9,
});

console.log(coordinates);

const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
