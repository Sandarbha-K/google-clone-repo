import axios from "axios";

const BASE_URL ="https://www.googleapis.com/customsearch/v1"

const params ={
    key:'AIzaSyAO0R8QwjZpIs039rNlJoYdZr-xIOvT3js',
    // 'AIzaSyD1TZKp-M0CkVuzGh0NrgUSRnv7xbIyzEw',
    cx:'0543869fc202e41d3'
    //cx:'3680b2b72aa3b4f22'
}
export const fetchDataFromApi = async (payload) => {
    const {data}=await axios.get(BASE_URL,{
        params:{...params,...payload}
    });
    return data;
};
