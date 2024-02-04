export interface IException {
  statusCode: number;
  timestamp: Date;
  path: string;
  message: string;
  code: string | string[];
}
