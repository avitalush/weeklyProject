import React, { useRef,useState ,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeesContext from '../context/employees';

const InputEmp = () => {
    const inputRef = useRef()
    // const nav = useNavigate()
const [selected,setSelected]=useState([]);
const {getByGender,getByNat}= useContext(EmployeesContext)

    const handleonChangeGender=(e)=>{
const {value}=e.target
getByGender(value)
    }
    const handleonChangeNat=(e)=>{
const {value}=e.target
getByNat(value)
    }
    return (
        <div>
        <label htmlFor="genders"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a gender</label>
        <select id="genders" onChange={handleonChangeGender} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>Choose a gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
        <label htmlFor="">company</label>
        <input className='m-2' ref={inputRef} type="search" placeholder='put in company' onChange={handleonChangeNat} />
    </div>
    )
}

export default InputEmp