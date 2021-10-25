/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AuthTokensService {

    /**
     * Create
     * Creates auth token for a user with the specified uid.
     * @returns any OK
     * @throws ApiError
     */
    public static createauthtoken({
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
             * Generates new auth token forcefully.
             */
            force?: boolean,
        },
    }): CancelablePromise<{
        data?: {
            uid?: string,
            authToken?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/users/${uid}/auth_tokens`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * Lists auth tokens for a user with the specified uid.
     * @returns any OK
     * @throws ApiError
     */
    public static listauthtokens({
        uid,
        apiKey,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: Array<{
            uid?: string,
            authToken?: string,
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
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users/${uid}/auth_tokens`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Flush
     * Deletes all the auth tokens for the specified uid.
     * @returns any OK
     * @throws ApiError
     */
    public static flushauthtokens({
        uid,
        apiKey,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users/${uid}/auth_tokens`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Get
     * Retrieves details of an auth token for the specified uid and auth token.
     * @returns any OK
     * @throws ApiError
     */
    public static getauthtoken({
        uid,
        authToken,
        apiKey,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** An auth token of a user. **/
        authToken: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: {
            uid?: string,
            authToken?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users/${uid}/auth_tokens/${authToken}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Update
     * Updates the details of an auth token for the specified uid and auth token.
     * @returns any OK
     * @throws ApiError
     */
    public static updateauthtoken({
        uid,
        authToken,
        apiKey,
        requestBody,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** An auth token of a user. **/
        authToken: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * The platform on which the auth token is being used.
             */
            platform?: string,
            /**
             * userAgent from which the auth token is used.
             */
            userAgent?: string,
            /**
             * JSON data containing app information.
             */
            appInfo?: string,
        },
    }): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/users/${uid}/auth_tokens/${authToken}`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes an auth token for the specified uid.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteauthtoken({
        uid,
        authToken,
        apiKey,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** An auth token of a user. **/
        authToken: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users/${uid}/auth_tokens/${authToken}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

}