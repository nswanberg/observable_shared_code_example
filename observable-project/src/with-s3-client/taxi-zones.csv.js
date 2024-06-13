import { readFromS3 } from "shared-code-with-s3-loader"

console.log(await readFromS3("nyc-tlc","misc/taxi _zone_lookup.csv"))