# GeoJSON SPS (Structured Properties Schema)

This repository defines **GeoJSON-SPS**, an extension to GeoJSON that supports
a structured properties schema (`structuredPropertiesSchema`) and compact feature
values (`structuredProperties`).

## Files

- `schema/geojson-sps.schema.json` – JSON Schema for the extension
- `examples/example.geojson` – Example dataset using the schema

## Key Changes
- Uses `structuredPropertiesSchema` to define property structure and metadata
- Uses `structuredProperties` array in each feature for compact values


## Example
```
{
  "type": "FeatureCollection",
  "structuredPropertiesSchema": [
    {
      "name": "P",
      "type": "number",
      "unit": "ppm",
      "standard_ref": "MODUS",
      "standard_code": "S-P-M3.19",
      "index": 0
    },
    {
      "name": "yield",
      "type": "number",
      "unit": "bu/ac",
      "standard_ref": null,
      "standard_code": null,
      "index": 1
    }
  ],
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": 
          [-90.0, 40.0]
      },
      "properties": {
        "structuredProperties": [150, 200]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": 
            [-90.1, 40.1]
        ]
      },
      "properties": {
        "structuredProperties": [125, 225]
      }
    }
  ]
}
```

## License
MIT
