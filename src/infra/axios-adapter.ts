import axios from "axios";
import {
  HttpRequest,
  HttpResponse,
  Request,
} from "../domain/ports/wire/out/HttpRequest";

class AxiosAdapter implements HttpRequest {
  async request(httpRequest: Request): Promise<HttpResponse> {
    const response = await axios.request({
      method: httpRequest.method,
      url: httpRequest.url,
      data: httpRequest.body,
    });
    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}

export default new AxiosAdapter();
