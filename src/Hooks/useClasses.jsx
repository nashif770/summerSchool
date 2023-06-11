import { useEffect, useState } from "react"

const useClasses = () =>{
    const [allClass, setAllClass] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setAllClass(data)
            setLoading(false)
        })
    }, [allClass.status])

    return [allClass, loading];

}

export default useClasses;