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

## License
MIT
