# observable_shared_code_example
POC for using Observable Framework with NPM Workspaces to share common code.

This simple case works, but as of 1.7.1, we need to clear the .observablehq/cache directory to get the latest changes to the shared code.

## To run

1. Clone the repo
2. Run `npm install` in the root directory
3. cd to `./observable-project` and run `npm run dev`

You should see a notebook that references a sum function defined in the `shared-code` module. 

