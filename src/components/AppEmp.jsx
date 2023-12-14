import React, { useEffect, useState ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import ListEmp from './ListEmp'
import InputEmp from './InputEmp'
import axios from 'axios'
import EmployeesContext from '../context/employees'

const AppEmp = () => {
  const [ar, setAr] = useState([])
  const [company, setCompany] = useState("")
  const {getEmployees}= useContext(EmployeesContext)
  const params = useParams()
  useEffect(() => {
    getEmployees()

  }, [params["company"]])

  // const doApi = async () => {
  //   let searchQ = params["company"] || "SSN"
  //   setCompany(searchQ)
  //   let url = `https://random-data-api.com/api/users/random_user/?size=200`;
  //   let res = await axios.get(url)
  //   console.log(res)
  //   setAr(res.data)
  // }

  return (
    <div>
      <InputEmp />
      <ListEmp  company={company} />
    </div>
  )
}

export default AppEmp