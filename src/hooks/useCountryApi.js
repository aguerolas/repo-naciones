import axios from "axios"
import { useState, useEffect} from "react"


const useCountryApi = () => {
  const [user, setUser]= useState()
  const [loading, setLoading]= useState(true)
    useEffect( () => {
      const URL= "https://restcountries.com/v3.1/region/south%20america"
      axios.get(URL)
        .then(res=> {
            setUser(res.data)
            console.log(res)
            setLoading(!loading)
        })
        .catch(err=> console.log(err))

    }, [])
        
  return {user,loading}
}

export default useCountryApi