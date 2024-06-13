# Import a method from a shared library without external dependencies (works)

```js
import { hello } from 'shared-code';
```

Result from running `hello` from `shared-code`: ${hello()}
