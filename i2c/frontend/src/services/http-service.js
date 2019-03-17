const endpoint = process.env.REACT_API_URL || 'http://localhost:3000';

export default class HttpService {
  static async getData(route) {
    const response = await fetch(`${endpoint}/${route}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error => {
        throw error;
      });
    return response;
  }
}
