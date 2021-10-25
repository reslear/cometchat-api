export interface CometChatApiConfig {
  apiKey: string
  appId: string
  region: string
}

export type RequestBody<T extends (...args: any) => any> =
  Parameters<T>[0]['requestBody']
