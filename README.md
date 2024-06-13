# observable_shared_code_example
POC for using Observable Framework with NPM Workspaces to share common code.

Two small issues to note:
- clear the .observablehq/cache directory after updating the shared code so that new code can be loaded.
- We'll need two separate packages for shared code: one for packages that can run in the browser,
  like lodash and mermaid, and one for packages that that use node APIs that are not
    available in the browser, like the AWS SDK. 

## To run

1. Clone the repo
2. Run `npm install` in the root directory
3. cd to `./observable-project` and run `npm run dev`

You should see a notebook that references a sum function defined in the `shared-code` module. 

