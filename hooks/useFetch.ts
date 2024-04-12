import { JobT } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";


type paramsType = {
    query?: string
    job_id?: string | undefined
    page?: number
    num_pages?: number
}

type ReturnType = {
    data: JobT[];
    isLoading: boolean;
    error: any;
    refetch: () => void;
};

const useFetch = (endpoint: "search" | "job-details", params: paramsType): ReturnType => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params,
        headers: {
            'X-RapidAPI-Key': '4a1927789emshdbae6e7d27b18e1p185554jsn0fcfa5414847',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };


    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            console.log(response.data);
        } catch (error: any) {
            console.error(error);
            setError(error)
            alert('there is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => { fetchData(); }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}

export default useFetch;