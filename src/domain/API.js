import API_URL from "../config";

class API {
  constructor() {
    this.url = API_URL;
  }

  async get({ path }) {
    try {
      const response = await fetch(`${this.url}${path}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}

export default new API();
