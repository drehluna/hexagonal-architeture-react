import axios from "axios";
import {
  HttpClient,
  HttpResponse,
  Request,
} from "../domain/ports/wire/out/HttpRequest";

class AxiosAdapter implements HttpClient {
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
