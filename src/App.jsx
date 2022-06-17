import { useState } from 'react'

import './App.css'
import useCountryApi from './hooks/useCountryApi'
import Loader from './Components/Loader'
import CardCounyty from './Components/CardCounyty'

function App() {
  const {user, loading}= useCountryApi()

  return (
    <div className="App">
      {
        loading? <Loader/>
           :
            user?.map(u=> (
              <CardCounyty u={u} key={u.area} />
            ) ) 
        
      }
    </div>
  )
}

export default App
