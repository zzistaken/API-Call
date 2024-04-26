import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AzKzr-u9bULl5fdq43uGd_mY_Q8YqA3_qJPeWM2xiG8",
    },
    params: {
      query: term,
    },
  });
  return response;
};
export default searchImages;
