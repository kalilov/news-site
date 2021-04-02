import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://news-site-4ed8c-default-rtdb.firebaseio.com/'
})

export default instance