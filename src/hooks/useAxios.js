import {useState} from 'react';
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = (url, select = '') => {
    const [data, setData] = useState([]);
    
    const fetchData = async() => {
        const res = await axios.get(url + select);
        setData((prevData) => [...prevData, { ...res.data, id: uuid() }]);
    }

    return [data, fetchData];
}

export default useAxios;