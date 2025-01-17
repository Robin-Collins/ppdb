/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAnimalsRequest = {
    page?: number | undefined;
    limit?: number | undefined;
    sort?: string | undefined;
};

export type GetAnimalsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A list of animals
     */
    animals?: Array<components.Animal> | undefined;
};

/** @internal */
export namespace GetAnimalsRequest$ {
    export const inboundSchema: z.ZodType<GetAnimalsRequest, z.ZodTypeDef, unknown> = z
        .object({
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
            sort: z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                limit: v.limit,
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });

    export type Outbound = {
        page: number;
        limit: number;
        sort?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAnimalsRequest> = z
        .object({
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
            sort: z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                limit: v.limit,
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });
}

/** @internal */
export namespace GetAnimalsResponse$ {
    export const inboundSchema: z.ZodType<GetAnimalsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Animals: z.array(components.Animal$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Animals === undefined ? null : { animals: v.Animals }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Animals?: Array<components.Animal$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAnimalsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            animals: z.array(components.Animal$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.animals === undefined ? null : { Animals: v.animals }),
            };
        });
}
