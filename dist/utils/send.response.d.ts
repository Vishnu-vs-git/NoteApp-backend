import { Response } from "express";
interface ResponseOptions<T> {
    statusCode: number;
    message: string;
    data?: T;
}
export declare const sendResponse: <T>(res: Response, options: ResponseOptions<T>) => Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=send.response.d.ts.map