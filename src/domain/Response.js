class Response {
  constructor(http, Type) {
    this.http = http;
    this.Type = Type;
  }

  getData() {
    if (Array.isArray(this.http)) {
      return this.http.map((item) => (this.Type ? new this.Type(item) : item));
    }
    return this.Type ? new this.Type(this.http) : this.http;
  }
}

export default Response;
