/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Bad Request
 */
export type BadRequestErrorData = {
    message?: string | undefined;
};

/**
 * Bad Request
 */
export class BadRequestError extends Error {
    /** The original data that was passed to this error instance. */
    data$: BadRequestErrorData;

    constructor(err: BadRequestErrorData) {
        super("");
        this.data$ = err;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "BadRequestError";
    }
}

/** @internal */
export namespace BadRequestError$ {
    export const inboundSchema: z.ZodType<BadRequestError, z.ZodTypeDef, unknown> = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return new BadRequestError({
                ...(v.message === undefined ? null : { message: v.message }),
            });
        });

    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BadRequestError> = z
        .instanceof(BadRequestError)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    message: z.string().optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.message === undefined ? null : { message: v.message }),
                    };
                })
        );
}
