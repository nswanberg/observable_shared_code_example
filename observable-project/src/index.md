# Shared Import Test

```js
import { add } from './add.js';
import { addShared } from './add-shared.js';
import { add as addSharedSecond } from 'shared-code';
```

```js
const localSum = add(1, 2);
const sharedSum = addShared(3, 4);
```

Sum from local module: ${localSum}

Sum from shared module: ${sharedSum}

Sum from shared module (second import): ${addSharedSecond(5, 6)}