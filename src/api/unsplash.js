import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID jBlJfVZn31-WT31qku-H9KA2qTcHuFSJ0MYWBTWOR0g',
      }
})

//normally you do NOT want to save your security key in the code, this is done here for simplification
//if this were to be deployed we would store this in a .env file excluded in our .gitignore