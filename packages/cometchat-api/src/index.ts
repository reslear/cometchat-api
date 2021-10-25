import { OpenAPI, UsersService, AuthTokensService } from './generated'
export { ApiError as CometChatApiError } from './generated'
import { CometChatApiConfig, RequestBody } from './types'

export function useCometChatApi({ apiKey, appId, region }: CometChatApiConfig) {
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

    // Friends: FriendsService,
    // Roles: RolesService,
    // AuthTokens: AuthTokensService,
    // BannedUsers: BannedUsersService,
    // BlockedUsers: BlockedUsersService,
    // Conversations: ConversationsService,
    // Groups: GroupsService,
    // Members: MembersService,
    // Messages: MessagesService
  }
}
