var MarkerAnnotation = mapkit.MarkerAnnotation,
  clickAnnotation
var home = new mapkit.Coordinate(42.893374, 0.69989)

mapkit.init({
  authorizationCallback: function (done) {
    done(
      "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkRITkMzU1NRODQifQ.eyJpc3MiOiIzV0FRRjNBUzgyIiwiaWF0IjoxNjQ3OTA2NDE3LCJleHAiOjE2NzkzNTY4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbWFpc29uZGFybG9zLmZyIn0.oXuxIu_m41vQa1kqnsgaWbn0AMxO6-3j_r1owsI6ph04DJLWqdPTkCxPvQ-N3CIDFLAnm4a21I2MEaO88Ov2qg"
    )
  },
})
var map = new mapkit.Map("map")

// Setting properties on creation:
var homeAnnotation = new MarkerAnnotation(home, {
  color: "#26406D",
  title: "Maison d'Arlos",
  glyphImage: { 1: "assets/logo.png" },
})

// Add and show both annotations on the map
map.showItems([homeAnnotation])

// Configure mapView
//map.mapType = mapkit.Map.MapTypes.Hybrid
var span = new mapkit.CoordinateSpan(0.16, 0.16),
  region = new mapkit.CoordinateRegion(home, span)
map.region = region
