# web-nearby-locations
Simple js library which fetch nearby desired locations based on user input

#### Implementation
```sh
  const Location = require('web-nearby-locations');
  
  const location = new Location(YOUR_GOOGLE_MAPS_KEY);
  
  location.fetchNearbyLocations(31.520370, 74.358749, 'hospital');

  location.fetchNearbyLocations(31.520370, 74.358749, 'bank');

  location.fetchNearbyLocations(31.520370, 74.358749, 'food');
```
This will return a promise object including array of nearby places/locations.

## Github
[Web-Nearby-Locations](https://github.com/ZainMustafaaa/web-nearby-locations)

## NPM Package
[Web-Nearby-Locations](https://www.npmjs.com/package/web-nearby-locations)