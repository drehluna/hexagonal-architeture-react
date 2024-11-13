export interface HttpResponse {}

export interface HttpResponse {
  statusCode: number;
  body?: any;
}

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export interface Request {
  url: string;
  method: HttpMethod;
  body?: any;
}

export interface HttpRequest {
  request(request: Request): Promise<HttpResponse>;
}
