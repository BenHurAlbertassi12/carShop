class ErrorMess extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
  }
}

export default ErrorMess;
