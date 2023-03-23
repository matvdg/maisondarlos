// Setting properties on creation:
var homeAnnotation = new MarkerAnnotation(home, {
  color: "#26406D",
  title: "Maison d'Arlos",
  glyphImage: { 1: "assets/logo.png" },
})

// LEAFLET

// On initialise la latitude et la longitude d'Arlos (centre de la carte)
var lat = 42.893374
var lon = 0.69989
var macarte = null
// Nous ajoutons un marqueur

L.lat
// Fonction d'initialisation de la carte
function initMap() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map("map").setView([lat, lon], 11)
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    minZoom: 1,
    maxZoom: 20,
  }).addTo(macarte)
  var marker = L.marker([lat, lon]).addTo(macarte)
}
window.onload = function () {
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap()
}
