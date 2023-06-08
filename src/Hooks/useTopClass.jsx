import React, { useEffect, useState } from 'react';

const useTopClass = () => {
    const [tClass, setTclass] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/topclasses')
        .then(res => res.json())
        .then(data => {
            setTclass(data)
            setLoading(false)
        })
    }, [])

    return [tClass, loading];
};

export default useTopClass;