import axios from 'axios';

const GetResident = (url) => {
    const promise = axios.get(`${url}`)
    return promise;
}

export default GetResident;