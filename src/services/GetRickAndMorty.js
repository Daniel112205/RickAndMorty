import axios from "axios";

const baseUrl = `https://rickandmortyapi.com/api/`;

const GetData = (locationNumber) => {
    const promise = axios(`${baseUrl}location/${locationNumber}`,{
        method: 'GET'
    });
    return promise;
}

export default GetData;