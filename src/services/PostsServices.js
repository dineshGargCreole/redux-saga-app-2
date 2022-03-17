import axios from 'axios';

export const getPostsService = async () => {
    const response = await axios.get('http://localhost:3000/posts')
    return response.data || []
}

export const createPostService = async (post) => {
    const response = await axios.post('http://localhost:3000/posts', post)
    return response
}

export const editPostService = async (post) => {
    const response = await axios.put(`http://localhost:3000/posts/${post.id}`, {...post})
    return response
}

export const getPostService = async (id) => {
    const response = await axios.get(`http://localhost:3000/posts/${id}`)
    return response
}


