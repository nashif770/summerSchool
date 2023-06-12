import { useEffect, useState } from "react"

const useClasses = () =>{
    const [allClass, setAllClass] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://b7a12-summer-camp-server-side-nashif770.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setAllClass(data)
            setLoading(false)
        })
    }, [allClass])

    return [allClass, loading];

}

export default useClasses;