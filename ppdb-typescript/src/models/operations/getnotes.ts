/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetNotesRequest = {
    page?: number | undefined;
    limit?: number | undefined;
    sort?: string | undefined;
};

export type GetNotesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A list of notes
     */
    notes?: Array<components.Note> | undefined;
};

/** @internal */
export namespace GetNotesRequest$ {
    export const inboundSchema: z.ZodType<GetNotesRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesRequest> = z
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
export namespace GetNotesResponse$ {
    export const inboundSchema: z.ZodType<GetNotesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Notes: z.array(components.Note$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Notes === undefined ? null : { notes: v.Notes }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Notes?: Array<components.Note$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            notes: z.array(components.Note$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.notes === undefined ? null : { Notes: v.notes }),
            };
        });
}
