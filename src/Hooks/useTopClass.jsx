import React, { useEffect, useState } from 'react';

const useTopClass = () => {
    const [tClass, setTclass] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://b7a12-summer-camp-server-side-nashif770.vercel.app/topclasses')
        .then(res => res.json())
        .then(data => {
            setTclass(data)
            setLoading(false)
        })
    }, [])

    return [tClass, loading];
};

export default useTopClass;