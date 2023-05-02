import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": '073eae4019mshdf83579f42d274bp1f1cd2jsn0eb5a9dce14a',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi= async (url)=>{
  try{
    const {data} =await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }catch(error){
     if (error.data && error.data.status === 429) {
      // Rate limit exceeded. Wait for 1 second and retry the request.
      console.log('Rate limit exceeded. Waiting for 1 second...');
      await new Promise(data => setTimeout(data, 1000));
      return fetchDataFromApi();
  }
  throw(error)
}
}

fetchDataFromApi()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
