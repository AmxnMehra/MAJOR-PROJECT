mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", //container id
  style: "mapbox://style/mapbox/streets-v12",
  center: listing.geometry.coordinates, //starting position [lng, lat]
  zoom: 5,
});

console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${location.location}</h4><p>Exact Location provided after booking</p>`
    )
  )

  .addTo(map);
