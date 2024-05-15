/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetBreedsBreedIDRequest = {
    breedID: number;
};

export type GetBreedsBreedIDResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A breed
     */
    breed?: components.Breed | undefined;
};

/** @internal */
export namespace GetBreedsBreedIDRequest$ {
    export const inboundSchema: z.ZodType<GetBreedsBreedIDRequest, z.ZodTypeDef, unknown> = z
        .object({
            breedID: z.number().int(),
        })
        .transform((v) => {
            return {
                breedID: v.breedID,
            };
        });

    export type Outbound = {
        breedID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBreedsBreedIDRequest> = z
        .object({
            breedID: z.number().int(),
        })
        .transform((v) => {
            return {
                breedID: v.breedID,
            };
        });
}

/** @internal */
export namespace GetBreedsBreedIDResponse$ {
    export const inboundSchema: z.ZodType<GetBreedsBreedIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Breed: components.Breed$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Breed === undefined ? null : { breed: v.Breed }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Breed?: components.Breed$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBreedsBreedIDResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            breed: components.Breed$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.breed === undefined ? null : { Breed: v.breed }),
            };
        });
}