/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BannedUsersService {

    /**
     * Ban
     * Bans a member from a group for a given guid and uid.
     * @returns any OK
     * @throws ApiError
     */
    public static bangroupmember({
        guid,
        uid,
        apiKey,
        onBehalfOf,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/groups/${guid}/bannedusers/${uid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

    /**
     * Unban
     * Unban a member with given uid from a group for a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static unbangroupuser({
        guid,
        uid,
        apiKey,
        onBehalfOf,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/groups/${guid}/bannedusers/${uid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

    /**
     * List
     * Lists banned users from a group for a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static listbannedgroupusers({
        guid,
        apiKey,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: Array<{
            uid?: string,
            name?: string,
            avatar?: string,
            status?: string,
            role?: string,
            scope?: string,
            isBanned?: boolean,
            joinedAt?: number,
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
                joinedAt?: number,
                affix?: string,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/groups/${guid}/bannedusers`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

}