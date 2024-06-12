# Shared Import Test

```js
import { add as addIndirectImport, product as productIndirectImport, factorial as factorialIndirectImport } from './fun-shared.js';
import { add as addDirectImport, product as productDirectImport, factorial } from 'shared-code';
```

Sum imported via a local javascript file:  ${addIndirectImport(2, 2)}

Sum imported in this notebook: ${addDirectImport(3, 3)}

Product imported via a local javascript file:  ${productIndirectImport(2, 2)}

Product imported in this notebook: ${productDirectImport(4, 4)}

Factorial imported via a local javascript file:  ${factorialIndirectImport(5)}

Factorial imported in this notebook: ${factorial(6)}
