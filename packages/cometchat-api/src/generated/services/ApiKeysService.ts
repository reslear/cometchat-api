/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ApiKeysService {

    /**
     * Create
     * Creates a new API key
     * @returns any
     * @throws ApiError
     */
    public static createapikey({
        apiKey,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * Friendly name for the API key.
             */
            name: string,
            /**
             * Scope for the API key.
             */
            scope: 'authOnly' | 'fullAccess',
        },
    }): CancelablePromise<{
        data?: {
            apiKey?: string,
            name?: string,
            scope?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/apikeys`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * Lists API keys
     * @returns any OK
     * @throws ApiError
     */
    public static listapikeys({
        apiKey,
        scope,
        searchKey,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Scope of the apikey. Available values: fullAccess, authOnly **/
        scope?: 'fullAccess' | 'authOnly',
        /** Searches for specified keyword in name **/
        searchKey?: string,
    }): CancelablePromise<{
        data?: Array<{
            apiKey?: string,
            name?: string,
            scope?: string,
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
            path: `/apikeys`,
            headers: {
                'apiKey': apiKey,
            },
            query: {
                'scope': scope,
                'searchKey': searchKey,
            },
        });
    }

    /**
     * Get
     * Retrieves API keys
     * @returns any OK
     * @throws ApiError
     */
    public static getapikey({
        apiKey,
        apiKey,
    }: {
        /** An apikey to retrieve. **/
        apiKey: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: {
            apiKey?: string,
            name?: string,
            scope?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/apikeys/${apiKey}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Update
     * Updates an API key
     * @returns any OK
     * @throws ApiError
     */
    public static updateapikey({
        apiKey,
        apiKey,
        requestBody,
    }: {
        /** An apikey to retrieve. **/
        apiKey: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * Friendly name for the API key.
             */
            name?: string,
            /**
             * Scope for the API key. Possible values: userauth, admin.
             */
            scope?: string,
        },
    }): CancelablePromise<{
        data?: {
            apiKey?: string,
            name?: string,
            scope?: string,
            createdAt?: number,
            updatedAt?: number,
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/apikeys/${apiKey}`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes an API key
     * @returns any OK
     * @throws ApiError
     */
    public static deleteapikey({
        apiKey,
        apiKey,
    }: {
        /** An apikey to retrieve. **/
        apiKey: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: {
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/apikeys/${apiKey}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

}