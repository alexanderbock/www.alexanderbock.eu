$(document).ready(function() {
  let map = L.map("map_canvas_flying");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let allPoints = [];

  $.get(
    "assets/project_icarus.data",
    null,
    function(data) {
      data.split("\n").forEach(function(line) {
        let values = line.trim().split(/\s+/).filter(Boolean);
        let points = [];
        for (let i = 0; i + 1 < values.length; i += 2) {
          let lat = parseFloat(values[i]);
          let lng = parseFloat(values[i + 1]);
          if (isNaN(lat) || isNaN(lng)) continue;
          points.push([lat, lng]);
        }
        if (points.length > 1) {
          L.polyline(points, { color: "#282fb5", weight: 3 }).addTo(map);
          allPoints = allPoints.concat(points);
        }
      });
      if (allPoints.length > 0) {
        map.fitBounds(allPoints, { padding: [20, 20] });
      }
    },
    "text"
  );
});
