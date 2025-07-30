// Convert GeoJSON-SPS to regular GeoJSON with named properties
function convertGeojsonSpsToGeojson(geojsonSps) {
  const schema = geojsonSps.structuredPropertiesSchema;
  const features = geojsonSps.features.map(feature => {
    const properties = {};
    schema.forEach(field => {
      properties[field.name] = feature.properties.structuredProperties[field.index];
    });
    return {
      type: 'Feature',
      geometry: feature.geometry,
      properties
    };
  });

  return {
    type: 'FeatureCollection',
    features
  };
}

// Example usage:
const fs = require('fs');
const spsData = JSON.parse(fs.readFileSync('examples/example.geojson', 'utf8'));
const converted = convertGeojsonSpsToGeojson(spsData);
fs.writeFileSync('examples/converted.geojson', JSON.stringify(converted, null, 2));
console.log('Converted GeoJSON saved to examples/converted.geojson');
