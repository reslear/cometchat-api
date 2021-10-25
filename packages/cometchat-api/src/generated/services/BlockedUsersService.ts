/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BlockedUsersService {

    /**
     * Block User
     * Blocks the specified user
     * @returns any OK
     * @throws ApiError
     */
    public static blockUser({
        apiKey,
        uid,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** An uid of a user. **/
        uid: string,
        requestBody?: {
            /**
             * uids of the users to be blocked
             */
            blockedUids: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            superhero4?: {
                success?: boolean,
                message?: string,
            },
        },
    }> {
        return __request({
            method: 'POST',
            path: `/users/${uid}/blockedusers`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * UnBlock User
     * Unblocks the specified user
     * @returns any OK
     * @throws ApiError
     */
    public static unblockUser({
        apiKey,
        uid,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** An uid of a user. **/
        uid: string,
        requestBody?: {
            /**
             * uids of the users to be unblock
             */
            blockedUids: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            superhero3?: {
                success?: boolean,
                message?: string,
            },
            superhero4?: {
                success?: boolean,
                message?: string,
            },
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users/${uid}/blockedusers`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Blocked Users
     * Retrieves the blocked users
     * @returns any OK
     * @throws ApiError
     */
    public static listBlockedUsers({
        apiKey,
        uid,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** An uid of a user. **/
        uid: string,
    }): CancelablePromise<{
        data?: Array<{
            uid?: string,
            name?: string,
            avatar?: string,
            status?: string,
            role?: string,
            createdAt?: number,
            createdBy?: string,
            blockedByMe?: boolean,
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
                createdAt?: number,
                affix?: string,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users/${uid}/blockedusers`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

}