import axios from 'axios';


export const searchService = async ({serviceName, key, value}) => {
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/${serviceName}?${key}=${value}`;
    const response = await axios.get(url);
    return response;
}