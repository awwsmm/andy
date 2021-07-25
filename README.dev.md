To set up, you must run the following commands at the directory root

    $ npm install -D typescript tsconfig-paths ts-node # TS basics
    $ npm install -D chai mocha @types/chai @types/mocha # for tests
    $ npm install -D webpack webpack-cli ts-loader # for webpack publishing

To build and run the main `index.html` file, do

    $ npm run build && npm run launch

To run the test suites, do

    $ npm run tests