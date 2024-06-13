# Importing shared code that references the AWS S3 client (hangs)
```js
import { hello, s3Loader } from 'shared-code-with-s3-loader';
```

This won't load. It just hangs, presumably waiting for an import.

helloDirectImport: ${helloDirectImport()}
