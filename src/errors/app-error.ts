export class AppError extends Error {
  constructor(
    public statuscode: number,
    message: string,
     public errors?: unknown
  ) {
    super(message);
    this.name = "AppError";
  }
}
