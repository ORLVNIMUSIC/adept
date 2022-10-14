import type { NextPage } from 'next';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Companies from '../components/companies';
import Employees from '../components/employees';
import { addCompany } from '../store/companiesSlice';
import { RootState } from '../store/store';

const Home: NextPage = () => {
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
