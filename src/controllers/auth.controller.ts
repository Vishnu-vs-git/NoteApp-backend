import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";
import { sendResponse } from "../utils/send.response";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
import { clearAuthCookies, setAuthCookies } from "../utils/cookie";
import { TokenType } from "../constants/token-enum";
import { COOKIE_OPTIONS } from "../constants/cookie.options";
import { env } from "../config/env";




export class AuthController {
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await authService.register(req.body);

      return sendResponse(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: MESSAGES.AUTH_MESSAGES.REGISTER_SUCCESS,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { user, accessToken, refreshToken } =
        await authService.login(req.body);

      setAuthCookies(res, accessToken, refreshToken);

      return sendResponse(res, {
        statusCode: HTTP_STATUS.OK,
        message: MESSAGES.AUTH_MESSAGES.LOGIN_SUCCESS,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
  async refresh(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const refreshToken = req.cookies[TokenType.REFRESH];

    const accessToken =
      await authService.refresh(refreshToken);

    res.cookie(TokenType.ACCESS, accessToken, {
      ...COOKIE_OPTIONS,
      maxAge: Number(env.ACCESS_TOKEN_MAX_AGE),
    });

    return sendResponse(res, {
      statusCode: HTTP_STATUS.OK,
      message: MESSAGES.AUTH_MESSAGES.ACCESS_TOKEN_REFRESHED,
    });
  } catch (error) {
    next(error);
  }
}
async logout(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    clearAuthCookies(res);

    return sendResponse(res, {
      statusCode: HTTP_STATUS.OK,
      message: MESSAGES.AUTH_MESSAGES.LOGOUT_SUCCESS,
    });
  } catch (error) {
    next(error);
  }
}

}

export const authController = new AuthController();