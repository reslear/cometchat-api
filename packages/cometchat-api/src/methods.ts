import axios from 'axios'
import { CreateToken, CreateUser, GetUser } from '.'
import { CometchatApiConfig, TokenList } from './types'

interface CometChatApiError {
  error: {
    message: string
    devMessage: string
    source: string
    code: string
  }
}

function isCometChatError(e: unknown): e is CometChatApiError {
  return (e as CometChatApiError).error !== undefined
}

// see https://www.cometchat.com/docs/chat-apis/ref
// const chatApi = got.extend({
//   prefixUrl: `https://${env.COMETCHAT_APP_ID}.api-${env.COMETCHAT_REGION}.cometchat.io/v3.0`,
//   headers: {
//     apiKey: env.COMETCHAT_API_KEY
//   },
//   responseType: 'json',
//   resolveBodyOnly: true,
//   hooks: {
//     beforeError: [
//       (error) => {
//         const { response } = error

//         if (response?.body && isCometChatError(response.body)) {
//           error.message = response.body.error.message || ''
//         }

//         error.code = `${response?.statusCode || 500}`

//         return error
//       }
//     ]
//   }
// })

export function useCometchatApi(config: CometchatApiConfig) {
  if (!config?.apiKey || !config?.appId || !config?.region) {
    throw new Error('not correct set config')
  }

  const inst = axios.create({
    baseURL: `https://${config.appId}.api-${config.region}.cometchat.io/v3.0`,
    headers: {
      apiKey: config.apiKey
    }
  })

  const errorHandler = (e: any) => {
    return Promise.reject(e)
  }

  inst.interceptors.response.use(
    (response) => {
      // if (isCometChatError(response.data)) {
      //   throw new Error('CometChatError')
      // }

      return response
    },
    (error) => errorHandler(error)
  )

  const createToken = async (uid: UserId, json: CreateToken['body']) => {
    const { data } = await inst.post<CreateToken['resp']>(
      `users/${uid}/auth_tokens`,
      {
        json
      }
    )

    return data
  }

  const getUser = async (uid: UserId) => {
    const { data } = await inst.get<GetUser>(`users/${uid}`)
    return data
  }

  const createUser = async (json: CreateUser['req']) => {
    const { data } = await inst.post<CreateUser['res']>(`users`, {
      json
    })

    return data
  }

  const getTokens = async (uid: UserId) => {
    const { data } = await inst.post<TokenList>(`users/${uid}/auth_tokens`)

    return data
  }

  return {
    getUser,
    createUser,
    createToken,
    getTokens
  }
}
