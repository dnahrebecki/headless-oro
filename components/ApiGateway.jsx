// import config from "../config/configuration_lt.json";
import config from "../config/configuration.json";

class ApiGateway {
  async getToken(username, password) {
    window.localStorage.setItem(config.LOCAL_STORAGE_KEY_USERNAME, username);
    const localStorageKey = config.LOCAL_STORAGE_KEY + username;

    if (window.localStorage.getItem(localStorageKey)) {
      return window.localStorage.getItem(localStorageKey);
    }

    const body = JSON.stringify({
      grant_type: 'password',
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      username: username,
      password: password
    });

    console.debug(`Fetching token for ${username}`);

    const res = await fetch(config.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    });

    const tokenData = await res.json();
    const token = tokenData.access_token;

    console.debug(`Token: ${token}`);

    if (token) {
      window.localStorage.setItem(localStorageKey, token);
    }

    return token;
  }

  async fetch(endpoint, method = 'GET', body = '') {
    const username = window.localStorage.getItem(config.LOCAL_STORAGE_KEY_USERNAME);
    const token = window.localStorage.getItem(config.LOCAL_STORAGE_KEY + username);
    if (token === null) {
      throw new Error('Token is not provided. Authenticate first!')
    }

    const url = `${config.BASE_API_URL}${endpoint}`;
    const IsUpdateReq = ['POST', 'PATCH'].includes(method);
    let options = {
      method: method,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': `Bearer ${token}`
      }
    }

    if (IsUpdateReq && body !== '') {
      options.body = body;
      options.headers['Content-Type'] = 'application/json';
    }

    const response =  await fetch(url, options);

    if (response.status === 401) {
      window.localStorage.removeItem(config.LOCAL_STORAGE_KEY + username);
    }

    return response;
  }

  async get(endpoint) {
    const res = await this.fetch(endpoint)
    return res.json();
  }

  async patch(endpoint, data = {}) {
    return this.fetch(endpoint, 'PATCH', JSON.stringify(data))
  }
}

export default ApiGateway;
