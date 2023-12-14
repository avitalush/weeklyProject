
import React ,{useContext}from 'react'
import EmployeesContext from '../context/employees'
import ItemEmp from './ItemEmp'

const ListEmp = () => {
  const {employees}= useContext(EmployeesContext)
  return (
    <div className="row">
        {employees?.map(i =>{
            return <ItemEmp key={i.email} item={i} />
        })}
    </div>
  )
}

export default ListEmp