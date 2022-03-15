import axios from 'axios';

export const getPostsService = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data || []
}

export const createPostService = async (post) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
    return response
}

