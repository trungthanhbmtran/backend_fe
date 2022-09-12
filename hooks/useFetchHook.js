import {useState,useEffect} from 'react'
import {GetQuery} from '../service/Query';

export const useFetchHook = (url) =>{
    const [result,setResult] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        async function getData() {
            setIsLoading(true)
            try {
            const params = {page : 2 , limit : 50}
            const response = await GetQuery(url,params)
            const data = response.data
            setResult(data)
            } catch (error) {
                console.error('error from fetch :',error)
                setError(error.message)
            }
            setIsLoading(false)
        }
        getData()
    },[])

    return[
        result,
        error,
        isLoading
    ] 
}