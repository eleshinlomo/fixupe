import {createContext} from 'react'


const name = 'Woo that'
const initialValue = {
 name
}

export const GeneralContext = createContext(initialValue)

export const GeneralProvider = ({children})=>{

  const value = {
    name
  }

 return (
   <GeneralContext.Provider value={value}>
    {children}
  </GeneralContext.Provider>
 )
  
}

