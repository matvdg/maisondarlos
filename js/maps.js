var MarkerAnnotation = mapkit.MarkerAnnotation,
  clickAnnotation
var home = new mapkit.Coordinate(42.893374, 0.69989)

mapkit.init({
  authorizationCallback: function (done) {
    done(
      "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkxZRlM2Q1gzOTMifQ.eyJpc3MiOiIzV0FRRjNBUzgyIiwiaWF0IjoxNjE0MDkzMDc1LCJleHAiOjE4OTUzMjUwNzUsIm9yaWdpbiI6Imh0dHBzOi8vbWFpc29uZGFybG9zLmZyIn0.Z_-KFV8cGAVNYJlE5JBkLcG7rxYAsgGTugKZ1iG_AF0yCuFUxbi7Ccwenm0XNQHSGilq-JVs06bL7J4hn2LJsg"
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
