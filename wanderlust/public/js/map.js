mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", //container id
  style: "mapbox://style/mapbox/streets-v12",
  center: [77.209, 28.6139], //starting position [lng, lat]
  zoom: 9,
});
