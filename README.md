<p align="center">
  <img src="https://raw.githubusercontent.com/reslear/cometchat-api/HEAD/logo.svg" alt="cometchat-api">
</p>
<p align="center">
  <a href="https://npmjs.com/package/cometchat-api"><img src="https://img.shields.io/npm/v/cometchat-api.svg" alt="npm package"></a>
</p>
<br/>

# cometchat-api

simple cometchat api methods with typescript support

**🚧 WIP** – welcome pr

## Install

```sh
# npm
npm install cometchat-api

# yarn
yarn add cometchat-api

# pnpm
pnpm add cometchat-api
```

## Usage

```ts
import { useCometchatApi } from 'cometchat-api'

// set you env
const chat = useCometchatApi({
  apiKey: process.env.COMETCHAT_API_KEY,
  appId: process.env.COMETCHAT_APP_ID,
  region: process.env.COMETCHAT_REGION
})

// use in code
const user = await cometChatApi.getUser(`superhero1`)

// result
{
  "data": {
    "uid": "superhero1",
    "name": "Iron Man",
    "status": "offline",
    "role": "default",
    "createdAt": 1634636754
  }
}

```
