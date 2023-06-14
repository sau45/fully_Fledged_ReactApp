import { useEffect, useState } from 'react'
import { FetchApi } from '../Component/api/FetchApi'

const PassTofetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("Loading...")
        FetchApi(url).then(res => res.json()).then(data => {
            setData(data);
            setLoading(false)
        }).catch((error) => {
            setLoading(false);
            setError(error, "Something went wrong");
        })

    }, [url])


    return { data, loading, error }
}

export default PassTofetch
