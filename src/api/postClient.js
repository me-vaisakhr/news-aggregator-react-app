import { ApiClient } from "./apiClient";

let client = new ApiClient("https://jsonplaceholder.typicode.com");

export default {
  all() {
    return client.get("/posts");
  }
};
