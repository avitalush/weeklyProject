import { createContext,  useState } from "react";
import axios from "axios";

const EmployeesContext = createContext()

const Provider = ({children})=>{
    const url = `https://random-data-api.com/api/users/random_user/?size=10`;

    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const selectEmployee = (employee) => {
        setSelectedEmployee(employee);
    }

    const getEmployees = async () => {
        let res = await axios.get(url)
        const data = res.data;
        setEmployees(data)
    };
    const getByGender = async (gender) => {
      console.log(gender)
      let res = await axios.get(`${url}/gender=${gender}`)
      const data = res.data;
      setEmployees(data)
  };

  const getByNat = async (nat) => {
   
    let res = await axios.get(`${url}/nat=${nat}`)
    const data = res.data;
    setEmployees(data)
};
  const shared = {employees, getEmployees ,getByGender,getByNat}
  return (
    <EmployeesContext.Provider value={shared}>
        {children}
    </EmployeesContext.Provider>
  )
}

export {Provider}
export default EmployeesContext
