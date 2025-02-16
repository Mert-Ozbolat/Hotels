import axios from "axios"
import { Place } from './../types';

interface GetResponse {
    message: String;
    Places: Place[];
    results: number
}

const getPlaces = async () => {
    const res = await axios.get<GetResponse>('http://localhost:4001/api/places')
    return res.data
}


export { getPlaces }