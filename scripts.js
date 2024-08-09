// Initialize the map and set view to KKU's general location
var map = L.map('map').setView([16.4746, 102.8222], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Locations and their coordinates
var locations = {
    hospital: {
        coords: [16.4737, 102.8287],
        name: 'โรงพยาบาลศรีนครินทร์'
    },
    heartCenter: {
        coords: [16.4742, 102.8289],
        name: 'ศูนย์หัวใจสิริกิติ์'
    },
    complex: {
        coords: [16.4741, 102.8274],
        name: 'คอมเพล็กซ์'
    },
    sportsCenter: {
        coords: [16.4728, 102.8220],
        name: 'ศูนย์กีฬาแห่งชาติ'
    },
    gate1: {
        coords: [16.4760, 102.8233],
        name: 'ประตู 1'
    }
    // Add more locations with similar structure
};

// Add markers to the map for each location
for (var key in locations) {
    if (locations.hasOwnProperty(key)) {
        L.marker(locations[key].coords).addTo(map)
            .bindPopup('<b>' + locations[key].name + '</b>');
    }
}

// Function to focus the map on a specific location
function focusLocation(locationKey) {
    if (locations[locationKey]) {
        map.setView(locations[locationKey].coords, 17);
        map.openPopup();
    }
}
