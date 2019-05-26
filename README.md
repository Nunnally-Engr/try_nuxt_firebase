# try-nuxt-firebase

[![CircleCI](https://circleci.com/gh/Nunnally-Engr/try_nuxt_firebase.svg?style=svg)](https://circleci.com/gh/Nunnally-Engr/try_nuxt_firebase)

> My kryptonian Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Build Setting

### .env

- [Add Firebase SDKs and initialize Firebase](https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize)

```
FB_API_KEY=
FB_AUTH_DOMAIN=
FB_DATABASE_URL=
FB_PROJECTID=
FB_STORAGE_BUCKET=
FB_MESSAGING_SENDER_ID=
FB_APP_ID=1:
```

## Circle CI 2.0 Setting.

### 1. Execute the following command to issue Token that executes CI.

```
$ firebase login:ci
```

### 2. Set Token and Project ID of Firebase, which were issued above, in CircleCI environment variable.

- CircleCI Official：[How to use environment variables](https://circleci.com/docs/ja/2.0/env-vars/)
- Environment variables used in this project
  - $FIREBASE_TOKEN

