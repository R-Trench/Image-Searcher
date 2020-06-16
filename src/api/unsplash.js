import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID jBlJfVZn31-WT31qku-H9KA2qTcHuFSJ0MYWBTWOR0g',
      }
})