import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppEmp from './components/AppEmp'
import {Provider} from './context/employees'
function App() {

  return (
   <Provider>
     <AppEmp/>
   </Provider>
  )
}

export default App
