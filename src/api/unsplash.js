import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f6107ff43e2cad83f49756a818959ee4ee48ae9abb3b792b1b272946a9fd4096"
  }
});
