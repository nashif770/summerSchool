import { useEffect, useState } from "react"

const useClasses = () =>{
    const [aClass, setAclass] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setAclass(data)
            setLoading(false)
        })
    }, [])

    return [aClass, loading];

}

export default useClasses;