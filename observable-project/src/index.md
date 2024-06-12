# Shared Import Test

```js
import { add } from './add.js';
import { addIndirectImport } from './add-shared.js';
import { add as addDirectImport } from 'shared-code';
```


Sum defined in this project: ${add(1, 1)}

Sum imported via a local javascript file:  ${addIndirectImport(3, 4)}

Sum imported in this notebook: ${addDirectImport(5, 6)}
