import {Environments} from "../../environments/environments";
import type {Credentials} from "../../models/credentials";
import type {AuthObject} from "../../models/auth-object";
import type {ApiErrorResponse} from "../../models/api-error-response";

class Api {

  static getBackendConfig() {
    return Environments[Environments.env].backend;
  }

  handleError(error: any): ApiErrorResponse {
    let errorResponse: ApiErrorResponse = {
      error: error,
      text: 'An error ocurred. Please try again later.'
    };
    return errorResponse;
  }

  async get(url: string): any | ApiErrorResponse {
    return fetch(url, {
      method: 'GET'
    })
      .then((response) => {
        return response.json();
      })
      .catch((error: any) => {
        reject(this.handleError(error));
      })
  }

  async post(url: string, data: any): any | ApiErrorResponse {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .catch((error: any) => {
        reject(this.handleError(error));
      })
  }

  async login(credentials: Credentials): Promise<AuthObject | ApiErrorResponse> {
    //const query = await this.post(Api.getBackendConfig().url + Endpoints.LOGIN, credentials);
    //const {data} = await query.json();
    //return data;
    // Simulate api call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({token: 'sanoteru'});
      }, 1000);
    })
  }

}

const Endpoints = {
  LOGIN: ''
};

export default new Api();