/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteCustomersCustomerIDRequest = {
    customerID: number;
};

export type DeleteCustomersCustomerIDResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteCustomersCustomerIDRequest$ {
    export const inboundSchema: z.ZodType<DeleteCustomersCustomerIDRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                customerID: z.number().int(),
            })
            .transform((v) => {
                return {
                    customerID: v.customerID,
                };
            });

    export type Outbound = {
        customerID: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteCustomersCustomerIDRequest
    > = z
        .object({
            customerID: z.number().int(),
        })
        .transform((v) => {
            return {
                customerID: v.customerID,
            };
        });
}

/** @internal */
export namespace DeleteCustomersCustomerIDResponse$ {
    export const inboundSchema: z.ZodType<
        DeleteCustomersCustomerIDResponse,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteCustomersCustomerIDResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
