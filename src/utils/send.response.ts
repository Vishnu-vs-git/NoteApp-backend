import { Response } from "express";

interface ResponseOptions<T> {
  statusCode: number;
  message: string;
  data?: T;
}

export const sendResponse = <T>(
  res: Response,
  options: ResponseOptions<T>
) => {
  const { statusCode, message, data } = options;

  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};