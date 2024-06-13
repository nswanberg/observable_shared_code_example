# Use S3 Data Loader (works)

This uses the s3DataLoader to load data from an S3 bucket.

This works when you've set up AWS credentials in your environment, as in
https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-configure.html

```js
const taxiZoneData = FileAttachment("taxi-zones.csv").csv();
```

```js
Inputs.table(taxiZoneData)
```
