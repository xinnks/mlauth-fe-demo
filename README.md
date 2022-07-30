# mlAuth Front-end Example

This is an example demonstrating how to use the [mlauth-js](https://github.com/xinnks/mlauth-js) package to authenticate users with [mlAuth](https://github.com/xinnks/mlAuth) in a Front-end setup involving Vite + Vue.

## Setup
Add a .env file containing the client and secret keys from your mlAuth app
```env
VITE_MLAUTH_CLIENT=mlauth-app-client-key
VITE_MLAUTH_SECRET=mlauth-app-secret-key
```

## Install dependencies, and serve.
```sh
# install
npm run install

pnpm install

# serve
npm run dev

pnpm dev
```