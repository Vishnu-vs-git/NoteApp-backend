import bcrypt from "bcrypt";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { UserRegisterDTO } from "../interfaces/user.register.dto";
import User from "../models/User";
import { AppError } from "../errors/app-error";
import { HTTP_STATUS } from "../constants/http-status";
import { MESSAGES } from "../constants/message";
import { UserLoginDTO } from "../interfaces/user.login.dto";
import { JwtPayload } from "jsonwebtoken";

export class AuthService {
  async register(data: UserRegisterDTO) {
    const existingUser = await User.findOne({
      email: data.email,
    });

    if (existingUser) {
      throw new AppError(
        HTTP_STATUS.CONFLICT,
        MESSAGES.AUTH_MESSAGES.EMAIL_ALREADY_EXISTS
      );
    }

    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async login(data: UserLoginDTO) {
    const user = await User.findOne({
      email: data.email,
    });

    if (!user) {
      throw new AppError(
        HTTP_STATUS.UNAUTHORIZED,
        MESSAGES.AUTH_MESSAGES.INVALID_CREDENTIALS
      );
    }

    const isPasswordMatched = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!isPasswordMatched) {
      throw new AppError(
        HTTP_STATUS.UNAUTHORIZED,
        MESSAGES.AUTH_MESSAGES.INVALID_CREDENTIALS
      );
    }

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      accessToken,
      refreshToken,
    };
  }

  async getMe(userId: string) {
    const user = await User.findById(userId);

    if (!user) {
      throw new AppError(
        HTTP_STATUS.NOT_FOUND,
        MESSAGES.USER_MESSAGES.USER_NOT_FOUND
      );
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new AppError(
        HTTP_STATUS.UNAUTHORIZED,
        MESSAGES.AUTH_MESSAGES.UNAUTHORIZED
      );
    }

    const payload = verifyRefreshToken(refreshToken) as JwtPayload;

    const user = await User.findById(payload.userId);

    if (!user) {
      throw new AppError(
        HTTP_STATUS.UNAUTHORIZED,
        MESSAGES.AUTH_MESSAGES.UNAUTHORIZED
      );
    }

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
    });

    return accessToken;
  }
}

export const authService = new AuthService();