# web-nearby-locations
Simple js library which fetch nearby desired locations based on user input

#### Implementation
```sh
  const Location = require('web-nearby-locations');
  
  const location = new Location(YOUR_GOOGLE_MAPS_KEY);
  
  location.fetchNearbyLocations(21.3222, 32.3222, 'hospital');
```
This will return a promise object and including array of nearby hospital locations.

## NPM Package
[Web-Nearby-Locations](https://www.npmjs.com/package/web-nearby-locations)