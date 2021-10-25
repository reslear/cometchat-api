/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Create
     * Creates a new user
     * @returns any OK
     * @throws ApiError
     */
    public static createuser({
        apiKey,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * Unique identifier of the user. Please refer to https://prodocs.cometchat.com/docs/concepts#uid
             */
            uid: string,
            /**
             * Display name of the user.
             */
            name: string,
            /**
             * URL to profile picture of the user.
             */
            avatar?: string,
            /**
             * URL to profile page.
             */
            link?: string,
            /**
             * User role of the user for role based access control.
             */
            role?: string,
            /**
             * Additional information about the user as JSON.
             */
            metadata?: string,
            /**
             * Includes authToken of created user in response.
             */
            withAuthToken?: boolean,
            /**
             * A list of tags to identify specific users.
             */
            tags?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            uid?: string,
            name?: string,
            status?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/users`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * Lists all the users of an app
     * @returns any OK
     * @throws ApiError
     */
    public static listusers({
        apiKey,
        searchKey,
        status,
        count,
        perPage = 100,
        page = 1,
        role,
        withTags = false,
        tags,
        roles,
        onlyDeactivated,
        withDeactivated,
        onBehalfOf,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Searches for given keyword in user's list (either uid, name or email). **/
        searchKey?: string,
        /** User list can be fetched depending on the user status. (available, busy, away, offline). **/
        status?: string,
        /** Fetches users count. **/
        count?: boolean,
        /** Number of users to be fetched in a request. The default value is 100 and the maximum value is 1000. **/
        perPage?: number,
        /** Page number. **/
        page?: number,
        /** Retrieves user list based on role. **/
        role?: string,
        /** Includes tags in the response. **/
        withTags?: boolean,
        /** Fetches only those users that have these tags. **/
        tags?: Array<string>,
        /** Fetches users based on multiple roles. **/
        roles?: Array<string>,
        /** Fetches all the deactivated users of an app. **/
        onlyDeactivated?: boolean,
        /** Fetches all the users including deactivated users. **/
        withDeactivated?: boolean,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: Array<{
            uid?: string,
            name?: string,
            avatar?: string,
            status?: string,
            role?: string,
            createdAt?: number,
        }>,
        meta?: {
            pagination?: {
                total?: number,
                count?: number,
                per_page?: number,
                current_page?: number,
                total_pages?: number,
            },
            cursor?: {
                updatedAt?: number,
                affix?: string,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            query: {
                'searchKey': searchKey,
                'status': status,
                'count': count,
                'perPage': perPage,
                'page': page,
                'role': role,
                'withTags': withTags,
                'tags': tags,
                'roles': roles,
                'onlyDeactivated': onlyDeactivated,
                'withDeactivated': withDeactivated,
            },
        });
    }

    /**
     * Reactivate
     * Reactivates users for the specified uids
     * @returns any OK
     * @throws ApiError
     */
    public static reactivateuser({
        apiKey,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * uids that needs to reactivated.
             */
            uidsToActivate?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            superhero3?: {
                success?: boolean,
                message?: string,
            },
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/users`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deactivate
     * Deactivates users for the specified uids
     * @returns any OK
     * @throws ApiError
     */
    public static deactivate({
        apiKey,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * uids that needs to deactivated.
             */
            uidsToDeactivate?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            alreadyDeactivatedUids?: Array<string>,
            deactivatedUids?: Array<string>,
            notFound?: Array<string>,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get
     * Retrieves user details for a specified uid.
     * @returns any OK
     * @throws ApiError
     */
    public static getuser({
        uid,
        apiKey,
        onBehalfOf,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            uid?: string,
            name?: string,
            avatar?: string,
            status?: string,
            role?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users/${uid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

    /**
     * Update
     * Updates a user with the provided uid
     * @returns any OK
     * @throws ApiError
     */
    public static updateuser({
        uid,
        apiKey,
        requestBody,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * Display name of the user.
             */
            name?: string,
            /**
             * URL to profile picture of the user.
             */
            avatar?: string,
            /**
             * URL to profile page.
             */
            link?: string,
            /**
             * User role of the user for role based access control.
             */
            role?: string,
            /**
             * Additional information about the user as JSON. If you plan to use [Email Notification](doc:android-extensions-email-notification#section-configure-your-backend-to-store-emails) or [SMS Notification](doc:android-extensions-sms-notification#section-configure-your-backend-to-store-phone-number) extensions, Please add the private metadata here.
             */
            metadata?: string,
            /**
             * Updates tags of a specific group.
             */
            tags?: Array<string>,
            /**
             * The unsettable user attributes are avatar, link and metadata.
             */
            unset?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            uid?: string,
            name?: string,
            avatar?: string,
            status?: string,
            role?: string,
            createdAt?: number,
            updatedAt?: number,
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/users/${uid}`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes a user for the specified uid
     * @returns any OK
     * @throws ApiError
     */
    public static deleteuser({
        uid,
        apiKey,
        requestBody,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * Permanently deletes the user along with all the messages, conversations, etc.
             */
            permanent?: boolean,
        },
    }): CancelablePromise<{
        data?: {
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users/${uid}`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}