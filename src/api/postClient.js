import { ApiClient } from "./apiClient";

let client = new ApiClient(process.env.REACT_APP_TEST_API);

export default {
  all() {
    return client.get("/posts");
  }
};
