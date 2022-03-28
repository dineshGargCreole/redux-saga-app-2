import axios from 'axios';

export const getUsersService = async () => {
    const response = await axios.get('http://localhost:3000/users')
    return response;
}

export const logInUserService = async ({username, password}) => {
    const baseUrl = 'http://localhost:3000/users';
    const url = `${baseUrl}?username=${username}&password=${password}`;
    const response = await axios.get(url)
    return response;
}