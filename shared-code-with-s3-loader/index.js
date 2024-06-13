// Importing the AWS SDK here, then importing shared-code
// in an Observable notebook prevents the Observable
// notebook from loading.
import { readFromS3 } from "./s3Loader.js";

const hello = () => `Hello from shared code with S3 client!` 

export { hello, readFromS3 };