// Initialize the map and set the view to Khon Kaen University coordinates
var map = L.map('map').setView([16.4746, 102.8222], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Define locations and their coordinates
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
    // Add more locations similarly
};

// Add markers to the map for each location
for (var key in locations) {
    if (locations.hasOwnProperty(key)) {
        L.marker(locations[key].coords).addTo(map)
            .bindPopup('<b>' + locations[key].name + '</b>');
    }
}

// Routing control variable to store the route
var routingControl;

// Function to calculate and display the route
function calculateRoute() {
    var startLocation = document.getElementById('start').value;
    var endLocation = document.getElementById('end').value;

    if (locations[startLocation] && locations[endLocation]) {
        // Remove previous route if exists
        if (routingControl) {
            map.removeControl(routingControl);
        }

        // Add routing control to calculate the route between selected locations
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(locations[startLocation].coords),
                L.latLng(locations[endLocation].coords)
            ],
            routeWhileDragging: true
        }).addTo(map);
    } else {
        alert("กรุณาเลือกทั้งต้นทางและปลายทาง");
    }
}

// Function to focus the map on a specific location
function focusLocation(locationKey) {
    if (locations[locationKey]) {
        map.setView(locations[locationKey].coords, 17);
        map.openPopup();
    }
}
