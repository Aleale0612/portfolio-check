"use client"

import { useContext,createContext,useState, } from 'react'
import React from 'react'

const ThemeContext = createContext() 

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) =>{

  const [darkMode,setDarkmode]=useState(false)

  const toggleTheme = ()=>{
    setDarkmode(!darkMode)
  }

  return(
    <ThemeContext.Provider value={{darkMode,toggleTheme}} >
      {children}
    </ThemeContext.Provider>
  )


}
