// Renders the "Walking Manhattan" map with Leaflet. The data file is fetched
// with the native fetch() API, so this page no longer depends on jQuery.
document.addEventListener("DOMContentLoaded", function () {
  let map = L.map("map_canvas_walking").setView([40.72, -73.99], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  fetch("assets/project_hermes.data")
    .then(function (r) { return r.text(); })
    .then(function (data) {
      data.split("\n").forEach(function (line) {
        let values = line.trim().split(/\s+/).filter(Boolean);
        let points = [];
        for (let i = 0; i + 1 < values.length; i += 2) {
          let lat = parseFloat(values[i]);
          let lng = parseFloat(values[i + 1]);
          if (isNaN(lat) || isNaN(lng)) continue;
          points.push([lat, lng]);
        }
        if (points.length > 1) {
          L.polyline(points, { color: "#b5282f", weight: 3, opacity: 0.95 }).addTo(map);
        }
      });
    });
});
