import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";


export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(
        new AppError(
          HTTP_STATUS.BAD_REQUEST,
          "Validation failed",
          result.error.issues
        )
      );
    }

    req.body = result.data;

    next();
  };
};