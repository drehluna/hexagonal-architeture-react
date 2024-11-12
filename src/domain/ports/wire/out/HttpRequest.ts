export interface HttpResponse {}

export interface HttpResponse {
  statusCode: number;
  body?: any;
}

export interface Request {
  url: string;
  method: string;
  body?: any;
}

export interface HttpRequest {
  request(request: Request): Promise<HttpResponse>;
}
