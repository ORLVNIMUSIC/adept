import type { NextPage } from 'next';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Companies from '../components/companies';
import Employees from '../components/employees';
import { addCompany } from '../store/companiesSlice';
import { RootState } from '../store/store';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => {
    return state;
  });

  const companyName = useRef<HTMLInputElement>(null);
  const companyEmpNum = useRef<HTMLInputElement>(null);
  const companyAddress = useRef<HTMLInputElement>(null);

  function addHandler() {
    if (companyName.current && companyName.current.value) {
      if (companyEmpNum.current && companyEmpNum.current.value) {
        if (companyAddress.current && companyAddress.current.value) {
          dispatch(
            addCompany({
              name: companyName.current.value,
              employeeNumber: Number(companyEmpNum.current.value),
              address: companyAddress.current.value,
            })
          );
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <h1>Список компаний</h1>
      </div>
      <div className="container">
        <Companies />
        <Employees />
      </div>
    </>
  );
};

export default Home;
