import { useEffect, useState } from 'react'
import { server_calls } from '../api/Wishlist'

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
            setData(result)
    }

    useEffect( () => {
        handleDataFetch();
            }, [])
    return { 
        contactData, getData:handleDataFetch }
}


