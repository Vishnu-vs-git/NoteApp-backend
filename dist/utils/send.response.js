export const sendResponse = (res, options) => {
    const { statusCode, message, data } = options;
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
//# sourceMappingURL=send.response.js.map