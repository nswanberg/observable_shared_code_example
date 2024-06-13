# Importing shared code that references the AWS S3 client (hangs)
```js
import { hello } from 'shared-code-with-s3-loader';
```

This won't load, despite the fact that the s3DataLoader is not
directly included.

helloDirectImport: ${helloDirectImport()}
