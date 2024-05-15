/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteUsersUserIDRequest = {
    userID: number;
};

export type DeleteUsersUserIDResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteUsersUserIDRequest$ {
    export const inboundSchema: z.ZodType<DeleteUsersUserIDRequest, z.ZodTypeDef, unknown> = z
        .object({
            userID: z.number().int(),
        })
        .transform((v) => {
            return {
                userID: v.userID,
            };
        });

    export type Outbound = {
        userID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteUsersUserIDRequest> = z
        .object({
            userID: z.number().int(),
        })
        .transform((v) => {
            return {
                userID: v.userID,
            };
        });
}

/** @internal */
export namespace DeleteUsersUserIDResponse$ {
    export const inboundSchema: z.ZodType<DeleteUsersUserIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteUsersUserIDResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
