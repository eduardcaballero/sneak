import axios from 'axios';

export async function getImagesUnsplash(page= 1, query= 'app', cancelTokenSource) {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/search/photos?page=${page}&query=${query}`, { headers: { 'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_KEY}` }, cancelToken: cancelTokenSource.token })
    return response.data
}

export default getImagesUnsplash 