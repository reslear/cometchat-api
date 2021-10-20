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
const user = await chat.getUser('superhero1')

//  {
//    "data": {
//      "uid": "superhero1",
//      "name": "Iron Man"
//      ...
//    }
//  }

if (user) {
  console.log(user.data.name) // Iron Man
} else {
  console.log(user) // null
}
```

### Log Errors

```ts
import { isCometchatApiError } from 'cometchat-api'
import { AxiosError } from 'axios'

const errorHandler = (error: AxiosError) => {
  if (error.response && isCometchatApiError(error.response.data)) {
    console.error(error)
  }

  return Promise.reject(error)
}

// https://github.com/axios/axios#interceptors
chat.instance.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
)
```
