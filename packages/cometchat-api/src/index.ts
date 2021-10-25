import { OpenAPI, UsersService, AuthTokensService, ApiError } from './generated'
export { ApiError as CometChatApiError } from './generated'
import { CometchatApiConfig } from './types'

type RequestBody<T extends (...args: any) => any> =
  Parameters<T>[0]['requestBody']

export function useCometChatApi({ apiKey, appId, region }: CometchatApiConfig) {
  if (!apiKey || !appId || !region) {
    throw new Error('not correct set config')
  }

  OpenAPI.BASE = OpenAPI.BASE.replace('<appId>', appId).replace(
    '<region>',
    region
  )

  OpenAPI.HEADERS = {
    apiKey
  }

  // UsersService.getuser
  // AuthTokensService.

  return {
    instance: OpenAPI,
    users: {
      createUser: (requestBody: RequestBody<typeof UsersService.createuser>) =>
        UsersService.createuser({ apiKey, requestBody }),
      getUser: (
        options: Omit<Parameters<typeof UsersService.getuser>[0], 'apiKey'>
      ) => UsersService.getuser({ apiKey, ...options })
    },
    tokens: {
      createToken: (
        uid: string,
        requestBody: RequestBody<typeof AuthTokensService.createauthtoken>
      ) => AuthTokensService.createauthtoken({ uid, apiKey, requestBody }),
      listTokens: (uid: string) =>
        AuthTokensService.listauthtokens({ uid, apiKey })
    }

    // Friends: api.FriendsService,
    // Roles: api.RolesService,
    // AuthTokens: api.AuthTokensService,
    // BannedUsers: api.BannedUsersService,
    // BlockedUsers: api.BlockedUsersService,
    // Conversations: api.ConversationsService,
    // Groups: api.GroupsService,
    // Members: api.MembersService,
    // Messages: api.MessagesService
  }
}
